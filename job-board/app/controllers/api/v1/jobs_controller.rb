class Api::V1::JobsController < Api::V1::BaseController
  before_action :find_job, only: [:show, :update, :destroy]

  def index
    jobs = Job.all
    respond_with jobs
  end

  def create
    respond_with :api, :v1, Job.create(job_params)
  end

  def show
    respond_with @job
  end

  def update
    @job.update_attributes(job_params)
    respond_with @job, json: @job
  end

  def destroy
    respond_with Job.destroy(params[:id])
  end


  private

  def job_params
    params.require(:job).permit(:id, :name, :description, :experience, :willing_to_relocate)
  end

  def find_job
    @job = Job.find(params[:id])
  end
end