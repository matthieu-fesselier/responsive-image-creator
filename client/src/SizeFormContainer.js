import { connect } from 'react-redux';

import { operations } from './duck';
import SizeFormComponent from "./SizeFormComponent";

const mapStateToProps = (state) => {
    const { newFilename } = state.image;
    return {
        newFilename
    }
};

const mapDispatchToProps = (dispatch) => {
    const editSize = (value, field, index) => {
        dispatch(operations.editSize(value, field, index))
    };
    const removeSize = (index) => {
        dispatch(operations.removeSize(index))
    };

    return { editSize, removeSize };
};

const SizeFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SizeFormComponent);

export default SizeFormContainer;