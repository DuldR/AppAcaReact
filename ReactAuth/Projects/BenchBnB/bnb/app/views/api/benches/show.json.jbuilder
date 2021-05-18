json.set! @bench.id do
    json.extract! @bench, :description, :id, :lat, :long, :seats
    json.photoUrl url_for(@bench.photo)
end