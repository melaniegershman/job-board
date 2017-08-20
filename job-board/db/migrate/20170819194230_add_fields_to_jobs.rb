class AddFieldsToJobs < ActiveRecord::Migration[5.0]
  change_table :jobs do |t|
    t.string :location
    t.string :industry
    t.string :employment_type
  end
end
