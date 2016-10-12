# FSA Design System Site

The FSA Design System comprises of two core repositories:

1. This repo is the source code specific to the [FSA Design System web site](http://usda-fsa.github.io/fsa-design-system), documenting the FSA Style, providing HTML elements, and accompanying guidelines..
1. The [fsa-style](https://github.com/USDA-FSA/fsa-style/) repository is the HTML/CSS code available for download or install, as documented by the [FSA Design System web site](http://usda-fsa.github.io/fsa-design-system).


## Running locally

The [FSA Design System site](http://usda-fsa.github.io/fsa-design-system) is built using [Jekyll]() for the file framework and static site, [Grunt](http://gruntjs.com/) for task management, incorporates the [fsa-style node module](https://www.npmjs.com/package/fsa-style) for its style, and is deployed via [GitHub Pages](https://pages.github.com/) at http://usda-fsa.github.io/fsa-style/.

### Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.3+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/). Windows machines additionally require [DevKit](http://rubyinstaller.org/add-ons/devkit/).
1. Node v0.12.0+, [Installation guides](https://nodejs.org/en/download/)

### Building the documentation with Grunt

The documentation is built using Grunt automation. To use Grunt, first make sure you have it installed on your machine (globally):

```sh
npm install -g grunt-cli.
```

To start, run the following command to install project dependencies:

```sh
npm run install-dep # Installs dependencies
```


Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to http://localhost:4000/fsa-design-system/ in your browser — you should be viewing a local instance of http://usda-fsa.github.io/fsa-design-system/.

Here are a few other utility commands you may find useful:

* TBD
* TBD
* TBD

## Contributing

Please read through our [contributing guidelines](https://github.com/USDA-FSA/fsa-design-system/blob/gh-pages/CONTRIBUTING.md). These guidelines are directions for opening issues and submitting pull requests, and they also detail the coding and design standards we follow.
