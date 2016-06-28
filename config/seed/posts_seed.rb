require "./config/seed/generic_seed"

class Seed
  class PostsSeed < GenericSeed
    def self.klass
      Post
    end

    private

    def attributes_for_create
      attributes.merge(
        author_id: first_user.id,
        created_by: first_user.id,
        updated_by: first_user.id,
        published_by: first_user.id,
        html: "<p>#{record.markdown}</p>"
      )
    end
  end
end
