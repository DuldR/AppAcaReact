# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create!(description: "Test Bench 1", lat: 37.747573, long: -122.442415, seats: 1)
Bench.create!(description: "Test Bench 2", lat: 37.771836, long: -122.480727, seats: 2)
Bench.create!(description: "Test Bench 3", lat: 37.774343, long: -122.457431, seats: 3)
Bench.create!(description: "Test Bench 4", lat: 37.781894, long: -122.451058, seats: 4)


Bench.create!(description: "Filter Me", lat: 45, long: -175, seats: 1)