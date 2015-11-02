x
class User < ActiveRecord::Base
  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def self.authenticate(username, password)
    visitor = User.find_by_username username
    (visitor && visitor.password == password)? visitor : nil
  end

private
  def password_hash
    super
  end

  def password_hash=(arg)
    super
  end
end
