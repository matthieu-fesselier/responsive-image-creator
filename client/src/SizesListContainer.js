import { connect } from 'react-redux';
import SizesListComponent from './SizesListComponent';

import { operations } from './duck';


const mapStateToProps = (state) => {
    const {filename, loading} = state.image;
    return {
        filename,
        loading,
        sizes: state.image.sizes
    }
};

const mapDispatchToProps = (dispatch) => {
    const addSize = () => {
        dispatch(operations.addSize())
    };

    return { addSize };
};

const SizesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SizesListComponent);

export default SizesListContainer;