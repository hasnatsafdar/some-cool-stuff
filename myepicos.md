# Fedora Dev Environment Setup (Sway / Tiling WM)

This guide covers installing essential tools, fonts, plugins, and dev utilities for Fedora (works for most tiling WMs).

---

## 1. Core Utilities

```bash
sudo dnf install kitty zsh tmux bat fastfetch htop pyfiglet lolcat firefox fzf eza zstd zoxide
```

---

## 2. Shell Setup (Zsh + Plugins)

### Install Zinit (plugin manager)

```bash
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
```

### Install Starship (prompt)

```bash
curl -sS https://starship.rs/install.sh | sh
```

### Configure Zsh (~/.zshrc)

Add the following at the end of your config file:

```bash
# Zinit plugin manager
source ~/.zinit/bin/zinit.zsh

# Plugins
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-syntax-highlighting
zinit light Aloxaf/fzf-tab
zinit light jeffreytse/zsh-vi-mode
zinit light zdharma-continuum/history-search-multi-word
zinit light marlonrichert/zsh-autocomplete
zinit light zsh-users/zsh-completions

# Starship prompt
eval "$(starship init zsh)"

# Zoxide
eval "$(zoxide init zsh)"
```

---

## 3. Tmux Setup

```bash
git clone --single-branch https://github.com/gpakosz/.tmux.git "/path/to/oh-my-tmux"
mkdir -p ~/.config/tmux
ln -s /path/to/oh-my-tmux/.tmux.conf ~/.config/tmux/tmux.conf
cp /path/to/oh-my-tmux/.tmux.conf.local ~/.config/tmux/tmux.conf.local
```

---

## 4. Fonts

**JetBrains Mono Nerd Font:**
[Download](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/JetBrainsMono.zip)

---

## 5. Package Managers & Sandboxes

```bash
sudo dnf install flatpak
sudo dnf install paru
sudo dnf install snapd
```

---

## 6. Yazi (Terminal Emoji/Icons)

```bash
dnf copr enable lihaohong/yazi
dnf install yazi
```

---

## 7. Dev Tools & Helpers

### LazyVim

*(Follow standard installation instructions)*

### LazyDocker

```bash
curl https://raw.githubusercontent.com/jesseduffield/lazydocker/master/scripts/install_update_linux.sh | bash
```

### LazyGit

```bash
sudo dnf copr enable atim/lazygit -y
sudo dnf install lazygit
```

---

## 8. Productivity & Notes

* Obsidian
* Anki
* appflowey

---

## 9. Docker

*(Install as per standard Docker instructions for Fedora)*

---

## 10. Rust & Cargo

```bash
curl https://sh.rustup.rs -sSf | sh
cargo install dua-cli
```
