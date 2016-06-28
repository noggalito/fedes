require "./config/seed/logger"
require "./config/seed/models"
require "./config/seed/tags_seed"
require "./config/seed/posts_seed"
require "./config/seed/settings_seed"
require "./config/seed/db_connection"
require "./config/seed/post_tags_seed"

class Seed
  class << self
    def run
      new(environment).run
    end

    def environment
      ENV["NODE_ENV"] || "development"
    end
  end

  attr_reader :environment

  def initialize(environment)
    @environment = environment
  end

  def run
    db.connect!
    Logger.warn "seeding database for", environment
    klasses.each do |klass|
      klass.wipe_records! if wipe_db?
      klass.perform_queries
      Logger.success klass
    end
    db.disconnect!
    Logger.success "finished seeding!"
  end

  private

  def wipe_db?
    ENV["WIPE_DB"]
  end

  def db
    @db ||= DbConnection.new(environment)
  end

  def klasses
    [
      TagsSeed,
      PostsSeed,
      SettingsSeed,
      PostTagsSeed
    ]
  end
end
