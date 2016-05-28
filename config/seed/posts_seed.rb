require "yaml"
require "./config/seed/generic_seed"

class Seed
  class PostsSeed < GenericSeed
    def self.seeds
      load_fixtures "posts"
    end

    def seed!
      Logger.warn self.class, "TODO: seed", record.slug
    end
  end
end
