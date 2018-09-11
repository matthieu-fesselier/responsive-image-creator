import Creators from './actions';

const loadImage = Creators.loadImage;
const imageLoaded = Creators.imageLoaded;
const editFilename = Creators.editFilename;
const addSize = Creators.addSize;
const editSize = Creators.editSize;
const removeSize = Creators.removeSize;
const addHighRes = Creators.addHighRes;
const generateHtml = Creators.generateHtml;
const closePopup = Creators.closePopup;

export default {
    loadImage,
    imageLoaded,
    editFilename,
    addSize,
    editSize,
    removeSize,
    addHighRes,
    generateHtml,
    closePopup
}