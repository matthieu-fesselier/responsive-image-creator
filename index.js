const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const sharp = require('sharp');

const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.post('/api/generateImage', upload.single('image'), (req, res) => {


    req.body.sizes.forEach(function (size) {
        let filePath = `tmp/${req.body.filename}${size.suffix}.jpg`;

        sharp(req.file.path) // Resize image with the given sizes
            .resize(Number.parseInt(size.width), Number.parseInt(size.height))
            .toFile(filePath, function (err) {
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                //res.download(__dirname + '/' + filePath);
            });
    });
    res.json({fetched: true});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Responsive image creator listening on ${port}`);