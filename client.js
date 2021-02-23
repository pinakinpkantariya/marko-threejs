import MyTemplate from "./hello.marko";

var html = MyTemplate.renderToString({ label: "Click me!" });
MyTemplate.renderSync({ name: "Marko" }).appendTo(document.body);