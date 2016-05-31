require 'active_record/connection_adapters/sqlite3_adapter'

module ActiveRecord
  module ConnectionAdapters
    class SQLite3Adapter < AbstractAdapter
      def quoted_true; '1' end
      def unquoted_true; '1' end
      def quoted_false; '0' end
      def unquoted_false; '0' end
    end
  end
end
