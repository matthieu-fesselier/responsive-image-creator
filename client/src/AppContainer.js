import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { operations } from './duck';


const mapDispatchToProps = (dispatch) => {
    const generateHtml = (data) => {
        dispatch(operations.generateHtml(data))
    };

    return { generateHtml };
};

const AppContainer = connect(
    null,
    mapDispatchToProps
)(AppComponent);

export default AppContainer;