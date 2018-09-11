import { connect } from 'react-redux';
import HtmlGeneratorComponent from './HtmlGeneratorComponent';

import { operations } from './duck';


const mapStateToProps = (state) => {
    const {html, fetched} = state.image;
    const sizesLength = state.image.sizes.length;

    return {
        html,
        fetched,
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

    return { generateHtml, closePopup };
};

const HtmlGeneratorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HtmlGeneratorComponent);

export default HtmlGeneratorContainer;