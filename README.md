# FSA Design System Site

Open Source design resource and guidelines defining the next generation of FSA digital products, setting a new bar for simplicity and consistency across the USDA Farm Service Agency.

The FSA Design System comprises of two core repositories:

1. **[fsa-design-system](https://github.com/USDA-FSA/fsa-style/)**: Source code for the [FSA Design System web site](http://usda-fsa.github.io/fsa-design-system), documenting the FSA Style and accompanying guidelines.
1. **[fsa-style](https://github.com/USDA-FSA/fsa-style/)**: Style assets (HTML, CSS, Images) available for download or install, as documented by the [FSA Design System web site](http://usda-fsa.github.io/fsa-design-system).

## Using fsa-style

Refer to [FSA Design System > Get Started](http://usda-fsa.github.io/fsa-design-system/getting-started/) for directions on using fsa-style assets as a dependency.

## Running fsa-design-system locally

The [FSA Design System site](http://usda-fsa.github.io/fsa-design-system) is built using [Jekyll]() for the file framework and static site, [Grunt](http://gruntjs.com/) for task management, incorporates the [fsa-style node module](https://www.npmjs.com/package/fsa-style) for its style, and is deployed via [GitHub Pages](https://pages.github.com/) at http://usda-fsa.github.io/fsa-style/.

### 1. Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.3+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/). Windows machines additionally require [DevKit](http://rubyinstaller.org/add-ons/devkit/).
1. Node v0.12.0+, [Installation guides](https://nodejs.org/en/download/)

### 2. Fork

Fork this repo into your GitHub account (or just clone it if you're a member of the USDA-FSA GitHub Organization). Read more about [forking a GitHub repository](https://help.github.com/articles/fork-a-repo).

### 3. Building the documentation with Grunt

The documentation is built using Grunt automation. To use Grunt, first make sure you have it installed on your machine (globally):

```sh
npm install -g grunt-cli.
```

To start, run the following command to install Ruby and NPM dependencies:

```sh
npm run install-dep
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to http://localhost:4000/fsa-design-system/ in your browser — you should be viewing a local instance of http://usda-fsa.github.io/fsa-design-system/.

## Contributing

Please read our [contributing guidelines](https://github.com/USDA-FSA/fsa-design-system/blob/gh-pages/CONTRIBUTING.md) to learn how to open issues and submit pull requests as well as the coding and design standards we follow.
