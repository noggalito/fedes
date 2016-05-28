require "securerandom"
require "./config/seed/generic_seed"

class Seed
  class TagsSeed < GenericSeed
    DEFAULT_TAGS = [
      {
        hidden: false,
        name: "proyectos",
        slug: "proyectos",
        uuid: SecureRandom.uuid
      }
    ]
    def self.seeds
      DEFAULT_TAGS
    end

    def seed!
      # tags are not overriden
      if tag_exists?
        Logger.info "#{self.class} tag exists:", record.slug
      else
        create_tag!
      end
    end

    private

    def create_tag!
      Tag.create(record_with_user)
      Logger.success self.class, record.slug
    end

    def tag_exists?
      Tag.where(slug: record.slug).exists?
    end

    def record_with_user
      attributes.merge(
        created_by: first_user.id,
        updated_by: first_user.id
      )
    end

    def first_user
      @first_user ||= User.first
    end
  end
end
