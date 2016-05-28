class Seed
  class GenericSeed
    class << self
      def perform_queries
        seeds.each do |record|
          new(record).seed!
        end
      end

      def load_fixtures(identifier)
        YAML.load_file(
          "./config/seed/fixtures/#{identifier}.yml"
        )
      end
    end

    attr_reader :record, :attributes

    def initialize(attributes)
      @attributes = attributes
      # allow calling hash attributes as methods
      @record = OpenStruct.new(attributes)
    end
  end
end
