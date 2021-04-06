import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { APIUtil } from './util/api_util'

window.fetchGIFs = APIUtil.fetchGIFs;
