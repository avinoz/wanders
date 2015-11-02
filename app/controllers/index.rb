get '/' do
  @msg = params[:msg]
  erb :index
end

post '/login' do
  test = User.authenticate(params[:username],params[:password])
  if test
    user = User.find_by_username(params[:username])
    session[:user_id] = user.id
    msg = {:verification => true}.to_json
  else
    msg = {:verification => false}.to_json
  end
end

post '/logout' do
  session[:user_id] = nil
end

post '/textmsg' do

  if Message.valid?(params[:phone_num])
    Message.send(params[:message])
    {:msg => "valid"}.to_json
  else
    {:msg => "invalid"}.to_json
  end
end