class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :name
      t.text :description
      t.string :experience
      t.boolean :willing_to_relocate

      t.timestamps
    end
  end
end
