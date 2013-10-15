class PlayerRace < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :player
  belongs_to :race
end
