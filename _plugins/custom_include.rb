module Jekyll
  class AnywhereInclude < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @file = text.strip
    end

    def render(context)
      site = context.registers[:site]
      file_path = File.join(site.source, @file)

      if File.exist?(file_path)
        File.read(file_path)
      else
        "Included file '#{@file}' not found"
      end
    end
  end
end

Liquid::Template.register_tag('include_anywhere', Jekyll::AnywhereInclude)