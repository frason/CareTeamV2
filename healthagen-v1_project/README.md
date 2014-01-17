Healthagen prototype project
=====

This project uses [Middleman](http://middlemanapp.com/) to compile the files in the `source` folder into static files in the `build` folder.

This project also uses [Susy](http://susy.oddbird.net/) grid. When you run `middleman` for the first time, you might be prompted to run `bundle install`. This will automatically install Susy and any other gem dependencies.

## Requirements
1. Ruby
2. Xcode Command line tools
3. [Middleman](http://middlemanapp.com/)

The `Xcode Command line tools` can be installed through Xcode, or it can be downloaded as a standalone without installing Xcode at [http://developer.apple.com/downloads/index.action](http://developer.apple.com/downloads/index.action). Sign in, or register, with an Apple ID and search for "command line tool".

## Install Middleman

```shell
gem install middleman
```
If you get a permission error, you might need to do `sudo gem install middleman`. This means you're modifying the Mac system's version of Ruby that comes pre-installed by Apple. While it's OK to make minor modifications to that if you know what you're doing, it would be better to install another separate version of Ruby (following the instructions below).

## How to install Ruby
(These instructions were only tested on Mac OSX.)

### Install Homebrew

```shell
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```

### Install RBenv

```shell
brew install rbenv ruby-build
```
Optional: If you have RVM installed, or previously installed rbenv, run these two lines to remove them before installing rbenv.

```shell
rvm implode
rm -rf ~/.rbenv
```

Some useful commands:

```shell
cd ~        Navigate to home directory
ls -la      List all files, including hidden files
```
Create a `.bash_profile` (or `.zshrc`) file if you don't have one on your home directory (~):

```shell
cd ~
ls -la
touch .bash_profile
nano .bash_profile
```
Copy and paste this into the nano editor in the Terminal:

```shell
# RBENV
export RBENV_ROOT=/usr/local/var/rbenv
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
```
In nano, `Ctrl+X` to exit and save. When prompted to save, type `Y` for "yes".

Then back in the Terminal prompt:

```shell
source .bash_profile
```

At this point quit and restart Terminal for rbenv to take effect.

Some rbenv commands:

```shell
rbenv install -l     List all available versions for install.
rbenv versions       List all versions of ruby currently installed on your machine.
```
Finally use rbenv to install a version of ruby and make it the default.

```shell
rbenv install 1.9.3-p484
rbenv global 1.9.3-p484
rbenv rehash
```
Now if you type `ruby -v` in the Terminal, it should print out `ruby 1.9.3-p484`.

## Optional

Now that you have Homebrew, you can easily install other things with `brew`. (These are not required for this project.)

### Installing Git

```shell
brew install git
```

### Installing PhantomJS

```shell
brew install phantomjs
```

### Installing Node.js

```shell
brew install node
```

A useful Sublime Text package that requires Node.js is [Autoprefixer]( https://sublime.wbond.net/packages/Autoprefixer) for CSS vendor-prefixes.

### Installing Grunt CLI

```shell
npm install -g grunt-cli
```

### Installing Bundler

```shell
gem update --system
gem install bundler
```

