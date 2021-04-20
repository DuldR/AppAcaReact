class Api::TodosController < ApplicationController
    before_action :deny_access_if_not_logged_in

    def show
        render json: Todo.find(params[:id])
    end

    def index

        @todos = current_user.todos
        
        render json: @todos, include: :tags
    end

    def create
        @todo = current_user.todos.new(todo_params)

        if @todo.save
            render json: @todo, include: :tags
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def update

        @todo = current_user.todos.find(params[:id])
        
        if @todo.update_attributes(todo_params)
            render json: @todo, include: :tags
        else
            render json: @todo.errors.full_messages, status: 422
        end
        
    end

    def destroy

        @todo = current_user.todos.find(params[:id])
        @todo.destroy

        render json: @todo
        
    end

    protected
    def todo_params
        self.params.require(:todo).permit(:title, :body, :done, :tag_names => [], :move_names => [])
    end

end