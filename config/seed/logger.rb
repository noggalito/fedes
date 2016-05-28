require "colorize"

class Seed
  class Logger
    COLORS = {
      info: :blue,
      warn: :yellow,
      success: :green
    }

    %w(
      warn
      info
      success
    ).each do |level|
      define_method level do |msg, detail=""|
        color = COLORS[level]
        log(
          level.upcase.colorize(color),
          msg,
          detail.colorize(:blue)
        )
      end
    end

    def log(*args)
      puts "[#{Time.now}] #{args.join(" ")}"
    end
  end
end
