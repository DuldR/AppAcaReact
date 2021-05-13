json.array! @reviews do |review|
    json.set! review.id do
        json.rating review.rating
    end
end
