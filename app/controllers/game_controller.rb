get '/racing_thyme' do
  erb :race
end

post '/results' do
  race = Race.create(winner: params[:winner])
  playa1 = Player.find_by_name(params[:first])
  playa2 = Player.find_by_name(params[:second])
  playa1.races << race
  playa2.races << race
  
end
