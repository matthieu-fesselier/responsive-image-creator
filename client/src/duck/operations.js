import Creators from './actions';

const loadImage = Creators.loadImage;
const imageLoaded = Creators.imageLoaded;
const editFilename = Creators.editFilename;
const addSize = Creators.addSize;
const editSize = Creators.editSize;
const removeSize = Creators.removeSize;
const addHighRes = Creators.addHighRes;
const closePopup = Creators.closePopup;
//const generateHtml = Creators.generateHtml;

const generateHtml = () => {
    return dispatch => {

        return fetch(`/api/generateImage`)
            .then(response => response.json())
            .then(json => {

                // Dispatching this action while passing the 'data' array
                // we created above will update the store with this data.
                // It is good practice to send only the required information
                // rather than trimming the data when and where it is used.
                // This is why we aren't sending the entire JSON response to
                // the Redux store.
                dispatch(receiveHtml(json))
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
    closePopup,
    receiveHtml
}