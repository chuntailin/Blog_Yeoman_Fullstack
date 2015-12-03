# generator-react-redux-kit v0.0.7 (wip)

> Yeoman generator for [ReactJS](http://facebook.github.io/react/) - lets you quickly set up a project including karma test runner and [Webpack](http://webpack.github.io/) module system.

# About
This is fork from Generator React Webpack that will help you build new React projects using modern technologies. Generator React Webpack is great tool and provides many of the set up boilerplate which makes it quick and easy to get started. Thus it was forked.
You can find the original here: https://github.com/newtriks/generator-react-webpack

Some differences are:
- **No** class keyword
- Implements redux
- Implements react-router
- Hapi backend support

Out of the box it comes with support for:
- Webpack
- ES2015 via Babel-Loader
- Different supported style languages (sass, scss, less, stylus)
- Automatic code linting via esLint
- Ability to unit test components via Karma and Mocha/Chai

---

## Installation
```bash
npm install -g yo
npm install generator-react-redux-kit
```

## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo react-redux-kit
```

Please make sure to edit your newly generated `package.json` file to set description, author information and the like.

## Generating new components
```bash
# After setup of course :)
# cd my-new-project
yo react-redux-kit:component my/namespaced/components/name
```

The above command will create a new component, as well as its stylesheet and a basic testcase.

## Usage
The following commands are available in your project:
```bash
# Start for development

## Front end code
make client

## Hapi Server
make web

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

### Naming Components
We have opted to follow [@floydophone](https://twitter.com/floydophone) convention of uppercase for component file naming e.g. [Component.js](https://github.com/petehunt/ReactHack/tree/master/src/components). I am open to suggestions if there is a general objection to this decision.

### Modules
Each component is a module and can be required using the [Webpack](http://webpack.github.io/) module system. [Webpack](http://webpack.github.io/) uses [Loaders](http://webpack.github.io/docs/loaders.html) which means you can also require CSS and a host of other file types. Read the [Webpack documentation](http://webpack.github.io/docs/home.html) to find out more.

## Contribute

Contributions are welcomed. When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

### Running Tests
`npm test` or `node node_modules/.bin/mocha`

or

`make test`

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
