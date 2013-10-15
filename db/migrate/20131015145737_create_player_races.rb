class CreatePlayerRaces < ActiveRecord::Migration
  def change
    create_table :player_races do |t|
      t.integer :player_id
      t.integer :race_id
      t.integer :result
      t.string :duration
      t.timestamps
    end
  end
end
