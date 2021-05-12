class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            render json: @review
        else
            render json: ["Not a valid review"], status: 422
        end

    end


    def index
        # Does this work???
        # @bench = Bench.find(review_params[:bench_id])
        # @reviews = @bench.reviews

        @reviews = Review.where("bench_id = ?", review_params[:lookup_bench_id])
        render json: @reviews

    end


    def show

        @review = Review.find(params[:id])
        render :show

    end


    private
    
    def review_params
        params.require(:review).permit(:rating, :comment, :user_id, :bench_id, :lookup_bench_id)

    end


end