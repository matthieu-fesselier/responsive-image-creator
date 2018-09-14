import Creators from './actions';

const loadImage = Creators.loadImage;
const imageLoaded = Creators.imageLoaded;
const editFilename = Creators.editFilename;
const addSize = Creators.addSize;
const editSize = Creators.editSize;
const removeSize = Creators.removeSize;
const addHighRes = Creators.addHighRes;
const generateImages = Creators.generateImages;
const closePopup = Creators.closePopup;
const copyToClipboard = Creators.copyToClipboard;

const FileSaver = require('file-saver');
const generateHtml = (data) => {

    return dispatch => {
        dispatch(generateImages());

        return fetch(`/api/generateImage`, {
            method: 'post',
            body: data,
        })
            .then((data) => {
                // Get filename
                let filename = data.headers.get('content-disposition')
                    .match(new RegExp(/.*filename=['"]?([^"]+)/))[1] || "download.zip";

                // Save file
                data.blob()
                    .then(function (myBlob) {
                        FileSaver.saveAs(myBlob, filename);
                    })
                    .then(() => {
                        dispatch(receiveHtml({generated: true}))
                    });
            });
    }
};

const receiveHtml = Creators.receiveHtml;

export default {
    loadImage,
    imageLoaded,
    editFilename,
    addSize,
    editSize,
    removeSize,
    addHighRes,
    generateHtml,
    generateImages,
    closePopup,
    receiveHtml,
    copyToClipboard
}