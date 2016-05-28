require 'active_record'

class Seed
  class DbConnection
    def initialize(environment)
      @environment = environment
      configure!
    end

    def connect!
      require(db_adapter)
      ActiveRecord::Base.establish_connection(
        adapter: @db_adapter,
        database: @database_url
      )
    end

    private

    def configure!
      if @environment == "development"
        @db_adapter = "sqlite3"
        @database_url = Dir.pwd + "/content/data/ghost-dev.db"
      else
        @db_adapter = "pg"
        @database_url = ENV["DATABASE_URL"]
      end
    end
  end
end
