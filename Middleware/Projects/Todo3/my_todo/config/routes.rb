Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'butts#show'
  
  namespace :api do
    resources :todos, only: [:create, :index, :show, :destroy, :update ], defaults: { format: :json }
  end




end