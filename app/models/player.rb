class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :player_races
  has_many :races, through: :player_races
end
