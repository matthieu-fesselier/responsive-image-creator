import types from './types.js';

const loadImage = (file) => {
    return({
        type: types.LOAD_IMAGE,
        file: file
    })
};

const imageLoaded = (image) => {
    return({
        type: types.IMAGE_LOADED,
        image: image
    })
};

const editFilename = (value) => {
    return({
        type: types.EDIT_FILENAME,
        value: value
    })
};

const addSize = () => {
    return({
        type: types.ADD_SIZE
    })
};

const editSize = (value, field, id) => {
    return({
        type: types.EDIT_SIZE,
        value: value,
        id: id,
        field: field
    })
};

const removeSize = (id) => {
    return({
        type: types.REMOVE_SIZE,
        id: id
    })
};

const addHighRes = (id, ratio) => {
    return({
        type: types.ADD_HIGH_RES,
        id: id,
        ratio: ratio
    })
};

const receiveHtml = (data) => {
    return({
        type: types.REC_HTML,
        fetched: data.fetched
    })
};


const closePopup = () => {
    return({
        type: types.CLOSE_POPUP
    })
};


export default {
    loadImage,
    imageLoaded,
    editFilename,
    addSize,
    editSize,
    removeSize,
    addHighRes,
    closePopup,
    receiveHtml,
}