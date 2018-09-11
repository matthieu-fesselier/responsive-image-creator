import { connect } from 'react-redux';
import SizesComponent from './SizesComponent';

import { operations } from './duck';


const mapDispatchToProps = (dispatch) => {
    const addHighRes = (index, ratio) => {
        dispatch(operations.addHighRes(index, ratio))
    };

    return { addHighRes };
};

const SizesContainer = connect(
    null,
    mapDispatchToProps
)(SizesComponent);

export default SizesContainer;

