class Api::V1::BaseController < ApplicationController
  wrap_parameters format: [:json, :xml, :url_encoded_form, :multipart_form]
  respond_to :json
end
