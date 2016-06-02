require "./config/seed/generic_seed"

class Seed
  class SettingsSeed < GenericSeed
    DEFAULT_NAVIGATION = [
      { url: '/',           label: 'Inicio' },
      { url: '/servicios/', label: 'Servicios' },
      { url: '/blog/',      label: 'Blog' }
    ]
    DEFAULT_SETTINGS = [
      { key: "activeTheme", value: "fedes" },
      { key: "labs",        value: '{"publicAPI":true}' },
      { key: "logo",        value: '/default/logo-fedes.png' },
      { key: "navigation",  value: DEFAULT_NAVIGATION.to_json }
    ]

    def self.seeds
      DEFAULT_SETTINGS
    end

    def seed!
      setting.update!(value: record.value)
      Logger.success self.class, "#{record.key}:", record.value
    end

    private

    def setting
      Setting.find_by!(key: record.key)
    end
  end
end