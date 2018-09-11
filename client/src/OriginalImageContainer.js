import { connect } from 'react-redux';
import OriginalImageComponent from './OriginalImageComponent';

import { operations } from './duck';


const mapStateToProps = (state) => {
    const {newFilename} = state.image;
    return {
        newFilename
    }
};

const mapDispatchToProps = (dispatch) => {
    const loadImage = (file) => {
        dispatch(operations.loadImage(file))
    };
    const editFilename = (value) => {
        dispatch(operations.editFilename(value))
    };

    return { loadImage, editFilename };
};

const OriginalImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OriginalImageComponent);

export default OriginalImageContainer;