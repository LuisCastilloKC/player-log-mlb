class RemoveColuns < ActiveRecord::Migration[6.1]
  def change
    remove_column :players, :age
    remove_column :players, :gender
    remove_column :players, :team_name
    remove_column :players, :hight
    remove_column :players, :birth_country
    remove_column :players, :position
    remove_column :players, :jersey_number
  end
end
