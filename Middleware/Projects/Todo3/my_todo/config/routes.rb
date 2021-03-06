Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  
  namespace :api do
    resources :todos, only: [:create, :index, :show, :destroy, :update ], defaults: { format: :json }
    resources :steps, only: [:create, :index, :show, :destroy, :update ], defaults: { format: :json }
  end

  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]

  root to: 'static_pages#root'

end
