# json.extract! @pokemon, :id, :name

json.pokemon do
    json.set! @pokemon.id do
        json.name @pokemon.name
        json.id @pokemon.id
    end
end
