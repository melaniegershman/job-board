# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170819194230) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.integer  "journal_id"
    t.integer  "question_id"
    t.string   "text"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["journal_id"], name: "index_entries_on_journal_id", using: :btree
    t.index ["question_id"], name: "index_entries_on_question_id", using: :btree
  end

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_favorites_on_product_id", using: :btree
    t.index ["user_id"], name: "index_favorites_on_user_id", using: :btree
  end

  create_table "items", force: :cascade do |t|
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "experience"
    t.boolean  "willing_to_relocate"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "location"
    t.string   "industry"
    t.string   "employment_type"
  end

  create_table "journals", force: :cascade do |t|
    t.string   "subject_name"
    t.integer  "user_id"
    t.string   "rel_to_user"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["user_id"], name: "index_journals_on_user_id", using: :btree
  end

  create_table "people", force: :cascade do |t|
    t.string   "name"
    t.string   "favorite_city"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "image",      null: false
    t.string   "link",       null: false
    t.string   "name",       null: false
    t.string   "price",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string   "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "todos", force: :cascade do |t|
    t.string   "title"
    t.string   "created_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "email",              null: false
    t.string   "aboutme"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_foreign_key "entries", "journals"
  add_foreign_key "entries", "questions"
  add_foreign_key "favorites", "products"
  add_foreign_key "favorites", "users"
end
