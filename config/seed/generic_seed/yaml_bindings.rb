require "securerandom"
require "faker"

class Seed
  class GenericSeed
    class YamlBindings
      def helper
        binding
      end

      private

      def uuid
        SecureRandom.uuid
      end

      def lipsum
        Faker::Lorem.paragraph(5, true, 5)
      end

      def lipsum_html
        Faker::Lorem.paragraph(5, true, 5)
      end

      def lipsum_small
        Faker::Lorem.sentence
      end
    end
  end
end
