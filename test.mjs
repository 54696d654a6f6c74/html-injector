import { test_template, template } from "./templates.js";

const injector = require("./index.js").Injector;

document.getElementById("test").innerHTML += template.stringify;
document.getElementById("test").innerHTML += test_template.stringify;
injector.injectHTML(template, "test");