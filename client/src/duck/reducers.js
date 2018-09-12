import types from './types';

import utils from '../utils/file';
import copy from 'copy-to-clipboard';

const INITIAL_STATE = {
    file: '',
    size: '',
    filename: '',
    newFilename: '',
    extension: '',
    ratio: '',
    dimensions: {
        width: '',
        height: '',
    },
    sizes: [],
    html: '',
    generated: false,
    copied: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOAD_IMAGE: {
            let imageSource = {
                file: URL.createObjectURL(action.file),
                name: action.file.name,
                size: utils.fileConvertSize(action.file.size),
                filename: action.file.name,
                newFilename: action.file.name.split('.').slice(0, -1).join('.'),
                extension: action.file.name.split('.').pop()
            };
            return Object.assign({}, state, imageSource);
        }

        case types.IMAGE_LOADED: {
            let dimensions = {
                dimensions: {
                    width: action.image.naturalWidth,
                    height: action.image.naturalHeight
                },
                ratio: action.image.naturalWidth / action.image.naturalHeight
            };

            return Object.assign({}, state, dimensions)
        }

        case types.EDIT_FILENAME: {
            return Object.assign({}, state, {newFilename: action.value})
        }

        case types.ADD_SIZE: {

            let {width, height} = state.dimensions;

            let newSize = {
                width: width,
                height: height,
                error: false,
                suffix: "_" + width + "w",
                a2x: {
                    active: false,
                    width: width,
                    height: height,
                    suffix: "@2x",
                },
                a3x: {
                    active: false,
                    width: width,
                    height: height,
                    suffix: "@3x",
                }
            };

            return {
                ...state,
                sizes: [...state.sizes, newSize]
            }
        }

        case types.EDIT_SIZE: {

            let value = Number.parseInt(action.value);
            let type = action.field;
            let currentSize = {...state.sizes[action.id]};

            // Auto change width & height
            if (type !== "suffix") {
                if (Number.isInteger(value)) {
                    if (type === "width") {
                        currentSize.height = Math.round(value / state.ratio);
                    } else if (type === "height") {
                        currentSize.width = Math.round(value * state.ratio);
                    }

                    currentSize[type] = value;
                    currentSize.suffix = "_" + currentSize.width + "w"; // change suffix
                    currentSize.error = false;
                } else { // Error
                    currentSize.error = 'Please fill all the fields';
                    currentSize.width = '';
                    currentSize.height = '';
                }

            } else {
                currentSize[type] = action.value;
            }

            let newSizes = [...state.sizes];
            newSizes[action.id] = currentSize;

            return Object.assign({}, state, {sizes: newSizes});
        }

        case types.REMOVE_SIZE: {

            let newSizes;

            if (Number.isInteger(action.id)) {
                newSizes = [
                    ...state.sizes.slice(0, action.id),
                    ...state.sizes.slice(action.id + 1)
                ];
            } else {
                let id = action.id.split('-');
                let idSize = Number.parseInt(id[0]);
                let idRes = id[1];

                let currentSize = {...state.sizes[idSize]};
                currentSize[`a${idRes}`].active = false;


                newSizes = [...state.sizes];
                newSizes[idSize] = currentSize;

            }

            return Object.assign({}, state, {
                sizes: newSizes
            });
        }

        case types.ADD_HIGH_RES: {
            let ratio = action.ratio;
            let currentSize = {...state.sizes[action.id]};

            // Auto change width & height
            if (ratio === 2) {
                currentSize.a2x.width = 2 * currentSize.width;
                currentSize.a2x.height = 2 * currentSize.height;
                currentSize.a2x.active = true;
            } else if (ratio === 3) {
                currentSize.a3x.width = 3 * currentSize.width;
                currentSize.a3x.height = 3 * currentSize.height;
                currentSize.a3x.active = true;
            }

            let newSizes = [...state.sizes];
            newSizes[action.id] = currentSize;

            return Object.assign({}, state, {sizes: newSizes});
        }


        case types.CLOSE_POPUP: {
            return Object.assign({}, state, {generated: false});
        }

        case types.REC_HTML: {
            const { generated } = action;
            let srcset = '';

            state.sizes.forEach((size, index) => {
                srcset += `${state.newFilename}${size.suffix}.${state.extension} ${size.width}w`;
                if(index < state.sizes.length - 1){ srcset += ', ' }
            });

            let html = `
            <img src="${state.newFilename}.${state.extension}"
                srcset="${srcset}"
            />
            `;
            return Object.assign({}, state, {html: html, generated: generated});
        }

        case types.COPY_CLIP: {
            copy(state.html);
            return Object.assign({}, state, {copied: true});
        }

        default:
            return state;
    }
};

export default reducer;