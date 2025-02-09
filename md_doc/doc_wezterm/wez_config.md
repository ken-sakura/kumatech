# weztermのコンフィグについて
コンフィグファイルはホームディレクトリに
「.wezterm.lua」で作成すればOK
私が使う設定は下記の通り

```lua
local wezterm = require 'wezterm'
local config = {}

config.use_ime = true
config.color_scheme = 'AdventureTime'
config.window_background_image = '<background image path>'
config.window_background_opacity = 0.9

config.window_background_image_hsb = {
  -- Darken the background image by reducing it to 1/3rd
  brightness = 0.3,

  -- You can adjust the hue by scaling its value.
  -- a multiplier of 1.0 leaves the value unchanged.
  hue = 1.0,

  -- You can adjust the saturation also.
  saturation = 1.0,
}
return config
```

weztermのコンフィグはlua で書くので簡単なスクリプトなら組めるかも。。。


