# Dotfiles

This repository contains the configuration dotfiles for my applications. The directory structure in this repo mirrors the structure of the $HOME directory. 

## Requirements

Ensure you have the following installed on your system

- Git
- Stow

## Installation

First, checkout the dotfiles repo in your $HOME directory using git

```sh
git clone git@github.com/carsonwebster/Dotfiles.git
cd Dotfiles
```

Then use GNU stow to create symlinks

```sh
stow .
```

