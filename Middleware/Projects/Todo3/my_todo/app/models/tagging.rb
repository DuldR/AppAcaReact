class Tagging < ApplicationRecord
    belongs_to :todo
    belongs_to :tag

end