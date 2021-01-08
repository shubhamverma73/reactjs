import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hookcall, { Runtime } from './Hookcall';

ReactDOM.render(
    <>
        <Hookcall />
        <Runtime />
    </>,
        document.getElementById('root')
);