# neovimについて
## インストール方法
debian系のインストール方法は下記のコマンド実行でOK

```bash
sudo apt install neovim
```

詳細については、neovimのホームページから探したほうがいいかも

## コンフィグについては
ホームディレクトリの下記パスに記載する。

```bash
.config/nvim/init.vim
```

※luaでコンフィグを書いてもいいらしい。

詳細について->[コンフィグ](./intro_vimrc.md)

## luaの組み込みについて
neovimではluaでコンフィグ的な部分や簡単なスクリプトを実行できるらしいので
できることの幅が広がるかも

