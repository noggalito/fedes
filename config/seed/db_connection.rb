require 'active_record'

class Seed
  class DbConnection
    def initialize(environment)
      @environment = environment
    end

    def connect!
      require(db_adapter)
      ActiveRecord::Base.establish_connection(
        adapter: db_adapter,
        database: Dir.pwd + "/content/data/ghost-dev.db"
      )
    end

    private

    def db_adapter
      if @environment == "development"
        "sqlite3"
      else
        "pg"
      end
    end
  end
end
