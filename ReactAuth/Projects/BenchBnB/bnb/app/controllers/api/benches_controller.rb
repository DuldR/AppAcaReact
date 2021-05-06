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

        @benches = Bench.in_bounds(params[:bounds])
        
        render json: @benches

    end


    private 

    def bench_params
        params.require(:bench).permit(:description, :lat, :long, :seats)
    end
end
