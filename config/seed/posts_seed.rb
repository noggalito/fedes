require "yaml"
require "./config/seed/generic_seed"

class Seed
  class PostsSeed < GenericSeed
    def self.seeds
      YAML.load_file(
        "./config/seed/fixtures/posts.yml"
      ).fetch("posts")
    end

    def seed!
      Logger.warn self.class, "TODO: seed", record.slug
    end
  end
end
