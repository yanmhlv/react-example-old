import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
import {Welcome} from 'src/component/welcome.jsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/styles.css';

ReactDOM.render(
    <Welcome name="world">
    </Welcome>,
    document.getElementById('container')
);
