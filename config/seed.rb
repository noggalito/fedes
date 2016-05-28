require "./config/seed/db_connection"
require "./config/seed/logger"

class Seed
  class << self
    def run
      new(environment).run
    end

    def environment
      ENV["NODE_ENV"] || "development"
    end
  end

  def initialize(environment)
    @db = DbConnection.new(environment)
    logger.warn "seeding database for", environment
  end

  def run
    logger.warn "not so fast!"
    @db.connect!
  end

  private

  def logger
    @logger ||= Logger.new
  end
end
