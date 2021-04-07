json.partial! 'api/parties/party', party: @party
json.guests do
    json.array! @party.guests do |guest|

        json.name guest.name
        json.age guest.age
        json.favorite_color guest.favorite_color

        json.gifts guest.gifts do |gift|
            json.title gift.title
            json.description gift.description
        end


    end

end

# json.guests @party.guests do |guest|
#   json.name guest.name
#   json.gifts guest.gifts, :title
# end


# json.array! @party.guests, partial: 'api/guests/guest', as: :guest