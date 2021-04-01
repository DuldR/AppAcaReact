class ModifyColumnSteps < ActiveRecord::Migration[5.2]
  def change
    change_column_null :steps, :todo_id, false
  end
end
