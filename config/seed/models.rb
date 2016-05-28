require 'active_record'

class ActiveRecord::Base
  self.inheritance_column = nil
end

class Setting < ActiveRecord::Base
end
