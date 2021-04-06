import { APIKey } from '../api_store/api'



export const APIUtil = {
    fetchGIFs: (searchTerm) => (
        
        $.ajax({

            method: 'GET',
            url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${APIKey.key}&limit=2`
        })
    )
}