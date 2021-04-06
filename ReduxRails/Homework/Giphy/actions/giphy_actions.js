export const RECEIVE_SEARCH_GIPHYS = "RECEIVE_SEARCH_GIPHYS"


import { APIUtil } from '../util/api_util';

export const receiveSearchGiphys = (giphys) => {
    return {
        type: RECEIVE_SEARCH_GIPHYS,
        giphys
    };
}

export const fetchGiphys = (search) => dispatch => (
    APIUtil.fetchGIFs(search).then(giphys => dispatch(receiveSearchGiphys(giphys.data)))
)