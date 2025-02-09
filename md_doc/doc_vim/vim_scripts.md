# vimスクリプトについて
vimスクリプトでvimで開いているファイルをブラウザで
開くスクリプトを組んでみた。

```vim
"open file on browser"
function! OpenFileInBrowser()
  B
  let filePath = expand("%:p")
  execute '!/bin/google-chrome --new-window "' . filePath . '"'
endfunction
```

linuxで開く前提ぜ作成しているのでwindowsでは実行する
コマンドを変更する必要がある。
ブラウザはGoogle Chromeで実行する前提で作成している
ため他のブラウザを使う場合はスクリプトを修正する必要がある。

あとはvimのコマンドで実行するようにすればOK
