# json.partial! 'api/guests/guest', guests: @guest

# json.extract! @guest, :name, :age, :favorite_color

json.partial! 'api/guests/guest', guest: @guest
json.gifts @guest.gifts, partial: 'api/gifts/gift', as: :gift