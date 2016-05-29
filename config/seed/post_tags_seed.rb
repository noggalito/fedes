require "./config/seed/generic_seed"

class Seed
  class PostTagsSeed < GenericSeed
    DEFAULT_POST_TAGS = [
      {
        tag_slug: "proyectos",
        post_slug: "cooperacion-para-el-desarrollo"
      },
      {
        tag_slug: "proyectos",
        post_slug: "cima"
      },
      {
        tag_slug: "proyectos",
        post_slug: "prendho"
      }
    ]

    def self.klass
      PostTag
    end

    def self.seeds
      DEFAULT_POST_TAGS.map do |post_tag|
        tag = Tag.find_by! slug: post_tag[:tag_slug]
        post = Post.find_by! slug: post_tag[:post_slug]
        {
          tag_id: tag.id,
          post_id: post.id
        }
      end
    end

    private

    def record_exists?
      self.class.klass.where(attributes).exists?
    end

    def record_slug
      return "[tag:#{record.tag_id} <-> post:#{record.post_id}]"
    end

    def attributes_for_create
      attributes
    end
  end
end
