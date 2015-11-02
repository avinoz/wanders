Dotenv.load


class Message
    @account_sid  = ENV['ACCOUNT_SID']
    @auth_token  = ENV['AUTH_TOKEN']
    @client = Twilio::REST::Client.new @account_sid, @auth_token

  def self.send(message)
    message = @client.account.messages.create(
      :body => message,
      :to => "1#{@preped_num}",
      :from => "14088004200")
    puts message.to
  end

  def self.valid?(phone_num)
    @preped_num = phone_num.gsub(/\D/, '')
    @preped_num.length == 10
  end
end