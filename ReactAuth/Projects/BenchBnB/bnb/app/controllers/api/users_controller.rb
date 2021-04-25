class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.password = user_params[:password]
end
