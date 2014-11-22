images_dir = "img"

asset_host do |asset|
   ".." % (asset.hash % 4)
end