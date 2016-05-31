require "./config/seed/generic_seed"

class Seed
  class TagsSeed < GenericSeed
    def self.klass
      Tag
    end

    private

    def attributes_for_create
      attributes.merge(
        created_by: first_user.id,
        updated_by: first_user.id
      )
    end
  end
end
