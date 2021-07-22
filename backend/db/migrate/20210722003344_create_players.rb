class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :team_name
      t.integer :hight
      t.string :birth_country
      t.string :position
      t.integer :jersey_number
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
