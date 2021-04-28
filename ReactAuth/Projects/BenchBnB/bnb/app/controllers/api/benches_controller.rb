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
        @benches = Bench.all
        
        render json: @benches

    end


    private 

    def bench_params
        params.require(:bench).permit(:description, :lat, :long)
    end
end
