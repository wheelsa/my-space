class Api::PostsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    render json: user.posts
  end

  def update
  end
end
