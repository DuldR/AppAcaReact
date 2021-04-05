class CreateTags1 < ActiveRecord::Migration[5.2]
  def change
    create_table :tags1s do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
