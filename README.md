<p align="center">
    <img align="center" src="./public/title.svg" alt="Cookbook project title logo" />
    <br />
    <br />
    by xabicasado
</p>

## 🧑‍🍳 What's cooking here?

Hungry for something new? While you are here, feel free to play around [with the project](https://xabicasado.vercel.app)!

## 🚀 Getting Started

Install brew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc
source ~/.zshrc
```

Install **nvm** and set Node.js **v22.2.0**:

```bash
brew update
brew install nvm
mkdir ~/.nvm
echo "export NVM_DIR=~/.nvm\nsource \$(brew --prefix nvm)/nvm.sh" >> .zshrc
source ~/.zshrc
nvm install 22.2.0
```

Install **pnpm**:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.zshrc
```

or

```bash
npm install -g pnpm
```

Before you run Cookbook for the very first time, you will need to install the project dependencies:

```bash
pnpm i
```

Finally, use the development server to run the project locally:

```bash
pnpm dev
```

Open **[localhost:3000](http://localhost:3000)** with your browser to see the result.

Cookbook also utilizes a comprehensive component library visualized through Storybook. To browse the available UI components and their variations, run:

```bash
pnpm storybook
```

This command fires up the Storybook environment at **[localhost:6006](http://localhost:6006)**, where you can view and test components in isolation, ensuring a consistent look and feel throughout the app.

## 🏋️ Upgrading major dependencies

https://nextjs.org/docs/pages/building-your-application/upgrading/version-14

```bash
pnpm up next react react-dom eslint-config-next --latest
```

```bash
pnpm dlx storybook@latest upgrade
```
