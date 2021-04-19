export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectOnePokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonMovesNames = (state) => {
  let returnMoves = Object.values(state.entities.moves).map((move) => {
    return move.name;
  })
  // return Object.values(state.entities.moves)

  return returnMoves

}