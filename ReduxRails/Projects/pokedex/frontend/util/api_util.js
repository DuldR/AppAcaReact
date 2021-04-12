const APIUtil = {


    fetchAllPokemon: () => (
        $.ajax({
            method: 'GET',
            url: '/api/pokemon'
        })
    )
}

export default APIUtil