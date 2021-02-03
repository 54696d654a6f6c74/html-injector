# What is html-injector?
A lightweight library that allows the creation of reusable HTML templates.

## Who is this for?
- Those that want JSX without the bloat.
- Those that hate seeing a triple digit dependcy list when isntalling a package.
- Those that need an HTML generator that's lightweight and extensible.

## Installation
#### npm
<code>npm install 54696d654a6f6c74/html-injector</code>

## Usage

The recommended way of using this lib is to have JS files that hold <code>const</code> values that act as HTML.
Then importing the neccessary variables in the JS files that handle frontend and injecting them into the DOM.

### Gettings started

##### Importing the library into your `templates.js` file:

```js
const { Tag } = require('@54696d654a6f6c74/html-injector')
```

##### Creating a basic template:

```js
const template = 
new Tag("div", [
  new Tag("h1", "Hello world!")
]);
```

##### Extracting HTML from the template:

```js
console.log(template.stringify)
```

##### Controlling attributes:

Import the `Attribute` module:

```js
const { Tag, Attribute } = require('@54696d654a6f6c74/html-injector')
```

Add attributes to the template:

```js
const template = 
new Tag("div", [
  new Tag("h1", "Hello world!", [new Attribute("id", "main-header")])
    ], 
[
new Attribute("class", "container"),
new Attribute("id", "main-page-container")]
);
```

**Note that the attributes must be contained in a list ```[]```.**

##### Injecting to the DOM

Import the `Injector` module:

```js
const injector = require("@54696d654a6f6c74/html-injector").Injector;
```

Inject ```template``` into element with target ID "jolt"

```js
injector.bindHTML(template, "jolt");
```
**Note: The bind function can be used for a list of templates or list of targets with the same ```length``` as the list of templates.**

## Examples
### Nesting

```js
const inner = 
new Tag("div", [
    new Tag("h2", "Nesting", [new Attribute("id", "test")]),
    new Tag("h3", "example"),
    new Tag("h4", "works!!!")
]

const outer = 
new Tag("div" , [
    new Tag("h1", "Poop"),
    inner
]);
```

### Incremented indexing
```js
let counter = 0;
test_template = 
new Tag("div", [
    new Tag("button", "Option 1", [new Attribute("onclick", `select(${counter++})`)]),
    new Tag("button", "Option 2", [new Attribute("onclick" , `select(${counter++})`)])
]);
```
