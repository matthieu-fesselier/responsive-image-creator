const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const sharp = require('sharp');
const fs = require('fs');

const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.post('/api/generateImage', upload.single('image'), (req, res) => {

    let zip = new require('node-zip')();

    let promises = req.body.sizes.map(function(size) { // iterate over sizes
        let newFilename = `${req.body.filename}${size.suffix}.jpg`;

        // Resize image with the given sizes
        return sharp(req.file.path)
            .resize(Number.parseInt(size.width), Number.parseInt(size.height))
            .toBuffer()
            .then((data) => { // and zip them
                zip.file(newFilename, data, {base64: true});
            });
    });

    // when all is complete, zip the whole file
    Promise.all(promises).then(() => {
        let zipFile = zip.generate({base64:false,compression:'DEFLATE'}); // Zip files
        fs.writeFileSync(`tmp/${req.body.filename}.zip`, zipFile, 'binary');
        res.json({generated: true});
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Responsive image creator listening on ${port}`);