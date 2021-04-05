# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.create!(title: "Test Todo", body: "Test Body", done: false);
Step.create!(todo_id: 1, title: "Test Step1", body: "Body1", done: true);
Step.create!(todo_id: 1, title: "Test Step2", body: "Body2", done: false);
Step.create!(todo_id: 1, title: "Test Step3", body: "Body3", done: false);

Tag.create!(name: "Tag 1")

Tagging.create!(todo_id: 1, tag_id: 1)