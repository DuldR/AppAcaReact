class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(sessions_params[:username], sessions_params[:password])
        @user.reset_session_token!
        
        if @user.nil?
            flash.now[:errors] = ["Invalid credentials"]
            render json: @user.errors.full_messages
        else
            login!(@user)
            render json: @user
        end
    end


    def destroy

       if logged_in?
        logout!
        render json: {}
       else
        render json: 404
       end




    end


    private
    def sessions_params
        params.require(:session).permit(:username, :password)
    end
end
