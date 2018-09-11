import {connect} from 'react-redux';
import PreviewImageComponent from './PreviewImageComponent';

import {operations} from './duck';


const mapStateToProps = (state) => {
    const { file, filename, extension, size, dimensions} = state.image;
    return {
        file,
        filename,
        extension,
        size,
        dimensions
    }
};

const mapDispatchToProps = (dispatch) => {
    const imageLoaded = (image) => {
        dispatch(operations.imageLoaded(image))
    };

    return {imageLoaded};
};

const PreviewImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewImageComponent);

export default PreviewImageContainer;