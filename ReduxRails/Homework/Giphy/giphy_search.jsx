import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { APIUtil } from './util/api_util'

import { fetchGiphys, receiveSearchGiphys } from './actions/giphy_actions'


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})

// window.APIUtil = APIUtil
// window.receiveSearchGiphys = receiveSearchGiphys
// window.fetchGiphys = fetchGiphys


