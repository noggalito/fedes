require 'active_record'

class ActiveRecord::Base
  self.inheritance_column = nil
end

class Setting < ActiveRecord::Base
end

class Tag < ActiveRecord::Base
end

class User < ActiveRecord::Base
end
