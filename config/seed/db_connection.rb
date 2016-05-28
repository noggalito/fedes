require 'active_record'

class Seed
  class DbConnection
    def initialize(environment)
      @environment = environment
      configure!
    end

    def connect!
      require(@db_gem)
      ActiveRecord::Base.establish_connection(
        @connection_options
      )
    end

    def disconnect!
      ActiveRecord::Base.connection.disconnect!
    end

    private

    def configure!
      case @environment
      when "development"
        @db_gem = "sqlite3"
        @connection_options = {
          adapter: @db_gem,
          database: Dir.pwd + "/content/data/ghost-dev.db"
        }
      else
        @db_gem = "pg"
        db = URI.parse(ENV.fetch("DATABASE_URL"))
        @connection_options = {
          host: db.host,
          encoding: "utf8",
          username: db.user,
          password: db.password,
          database: db.path[1..-1],
          adapter: db.scheme == "postgres" ? "postgresql" : db.scheme
        }
      end
    end
  end
end
