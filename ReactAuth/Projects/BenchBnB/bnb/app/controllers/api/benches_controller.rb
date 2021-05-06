class Api::BenchesController < ApplicationController

    def create
        @bench = Bench.new(bench_params)

        if @bench.save
            render json: @bench
        else
            render json: ["Not a valid bench"], status: 422
        end

    end


    def index

    
        puts "Begin params"
        # puts params
        # You could refactor this a bit better
        # This is a single DB hit
        @benches = Bench.in_bounds(params[:bounds]).where("seats >= ? and seats <= ?", params[:min_seating], params[:max_seating])


        render json: @benches

    end


    private 

    def bench_params
        params.require(:bench).permit(:description, :lat, :long, :seats, :max_seating, :min_seating)
    end
end
