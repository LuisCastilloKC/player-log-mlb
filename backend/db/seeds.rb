# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

team1 = Team.create(name: "Toronto Blue Jays")


Player.create(name: "Vladimir Guerrero Jr,", age: 22, gender: "M", team_name: "Toronto Blue Jays", hight: 6, birth_country: "Canada", position: "1B", jersey_number: 27, team_id: team1.id)

