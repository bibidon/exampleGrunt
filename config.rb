images_dir = "_img"
http_images_path = "img"
http_generated_images_path = "img"

asset_host do |asset|
   ".." % (asset.hash % 4)
end