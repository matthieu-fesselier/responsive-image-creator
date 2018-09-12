import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { operations } from './duck';

const mapStateToProps = (state) => {
    const { loading } = state.image;
    return {
        loading
    }
};

const mapDispatchToProps = (dispatch) => {
    const generateHtml = (data) => {
        dispatch(operations.generateHtml(data))
    };

    return { generateHtml };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default AppContainer;