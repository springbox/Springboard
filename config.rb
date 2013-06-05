# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "/library/css"
sass_dir = "/library/scss"
images_dir = "/library/img"
javascripts_dir = "/library/js"
fonts_dir = "/library/fonts"

output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass library/scss scss && rm -rf sass && mv scss sass
preferred_syntax = :scss

# Default setting truncates numbers too short, make them longer
Sass::Script::Number.precision = 13