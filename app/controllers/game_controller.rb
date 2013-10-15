get "/racing_thyme/:player1_id/:player2_id" do
  @player1 = Player.find(params[:player1_id])
  @player2 = Player.find(params[:player2_id])
  erb :race
end

post '/results' do
  @race = Race.create(winner: params[:winner])
  @playa1 = Player.find_by_name(params[:first])
  @playa2 = Player.find_by_name(params[:second])
  @playa1.races << @race
  @playa2.races << @race
  redirect to '/resluts'
end

get '/resluts' do
  @winner = Race.last.winner

   erb :_results, layout: !request.xhr?
end
