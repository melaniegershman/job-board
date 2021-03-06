require "faker"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
experience = ["Entry-level", "Senior", "Mid-level", "Intern"]
willingness = [true, false]
employment_type = ["Full-time", "Part-time", "Temp", "Contract"]
industry = ["Fashion", "Media", "Technology", "Entertainment", "Sales", "Advertising"]

jobs = 5.times.map do
  Job.create!(
    :name => Faker::Company.profession,
    :description => Faker::Lorem.paragraph,
    :experience => experience.sample,
    :willing_to_relocate => willingness.sample,
    :location => (Faker::Address.city + ", " + Faker::Address.state),
    :industry => industry.sample,
    :employment_type => employment_type.sample
  )
end
