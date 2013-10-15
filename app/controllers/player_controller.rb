post '/new_players' do
  player1 = Player.create(name: params[:player1_name])
  player2 = Player.create(name: params[:player2_name])
  redirect "/racing_thyme/#{player1.id}/#{player2.id}"
end
