class Race < ActiveRecord::Base
  # Remember to create a migration!
  has_many :player_races
  has_many :players, through: :player_races
end
