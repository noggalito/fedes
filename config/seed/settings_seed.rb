class Seed
  class SettingsSeed
    DEFAULT_NAVIGATION = [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Servicios',
        url: '/servicios/'
      }
    ]

    DEFAULT_SETTINGS = {
      activeTheme: 'fedes',
      labs: '{"publicAPI":true}',
      logo: '/default/logo-fedes.png',
      navigation: DEFAULT_NAVIGATION.to_json
    }

    def initialize(options)
      @db = options.fetch(:db)
    end

    def perform_queries
      DEFAULT_SETTINGS.each do |key, value|
        Setting.find_by!(key: key).tap do |setting|
          setting.update!(value: value)
          Logger.info self.class, "#{key}:", value
        end
      end
    end
  end
end
