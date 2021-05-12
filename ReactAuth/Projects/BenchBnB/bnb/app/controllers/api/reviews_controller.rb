class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            render json: @review
        else
            render json: ["Not a valid review"], status: 422

    end


    def index

    end


    def show

        @review = Review.find(params[:id])
        render :show

    end


    private
    
    def review_params
        params.require(:review).permit(:rating, :comment)

    end


end