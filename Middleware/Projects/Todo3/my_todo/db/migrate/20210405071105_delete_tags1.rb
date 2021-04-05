class DeleteTags1 < ActiveRecord::Migration[5.2]
  def change
    drop_table :tags1s
  end
end
