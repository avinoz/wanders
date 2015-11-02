
User.create!(username: "avinoz", email: "avinoz@gmail.com", password: "1234")

20.times do |i|
	User.create!(
		username: Faker::Internet.user_name,
		email: Faker::Internet.email,
    password: rand(i)
		)
end

Image.create!(title: "Hello Kitty", url: "../../b1.jpg")
Image.create!(title: "Avio Collective", url: "../../b2.jpg")
Image.create!(title: "Ginto", url: "../../b3.jpg")
Image.create!(title: "Blah", url: "../../b4.jpg")
Image.create!(title: "Pier 1", url: "../../b5.jpg")
Image.create!(title: "Thai Food", url: "../../b6.jpg")
Image.create!(title: "China Town", url: "../../b7.jpg")
