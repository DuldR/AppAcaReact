import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { APIUtil } from './util/api_util'

import { fetchGiphys, receiveSearchGiphys } from './actions/giphy_actions'


const store = configureStore();

window.APIUtil = APIUtil
window.receiveSearchGiphys = receiveSearchGiphys
window.fetchGiphys = fetchGiphys
window.store = store

