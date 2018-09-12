import { connect } from 'react-redux';
import HtmlGeneratorComponent from './HtmlGeneratorComponent';

import { operations } from './duck';


const mapStateToProps = (state) => {
    const {html, generated} = state.image;
    const sizesLength = state.image.sizes.length;

    return {
        html,
        generated,
        sizesLength
    }
};

const mapDispatchToProps = (dispatch) => {
    const generateHtml = () => {
        dispatch(operations.generateHtml())
    };

    const closePopup = () => {
        dispatch(operations.closePopup())
    };

    const copyToClipboard = () => {
        dispatch(operations.copyToClipboard())
    };


    return { generateHtml, closePopup, copyToClipboard };
};

const HtmlGeneratorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HtmlGeneratorComponent);

export default HtmlGeneratorContainer;