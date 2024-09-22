(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsEu = factory();
  }
})(this, function () {
  return [
    "1,12,0022",
    '{"b":{"a":0,"e":0,"o":0,"i":0,"u":0,"l":{"a":1,"e":1,"o":1,"i":1,"u":1},"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"c":{"a":0,"e":0,"o":0,"i":0,"u":0},"d":{"a":0,"e":0,"o":0,"i":0,"u":0,"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"f":{"a":0,"e":0,"o":0,"i":0,"u":0,"l":{"a":1,"e":1,"o":1,"i":1,"u":1},"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"g":{"a":0,"e":0,"o":0,"i":0,"u":0,"l":{"a":1,"e":1,"o":1,"i":1,"u":1},"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"j":{"a":0,"e":0,"o":0,"i":0,"u":0},"k":{"a":0,"e":0,"o":0,"i":0,"u":0,"l":{"a":1,"e":1,"o":1,"i":1,"u":1},"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"l":{"a":0,"e":0,"o":0,"i":0,"u":0,"l":{"a":1,"e":1,"o":1,"i":1,"u":1}},"m":{"a":0,"e":0,"o":0,"i":0,"u":0},"n":{"a":0,"e":0,"o":0,"i":0,"u":0},"ñ":{"a":0,"e":0,"o":0,"i":0,"u":0},"p":{"a":0,"e":0,"o":0,"i":0,"u":0,"l":{"a":1,"e":1,"o":1,"i":1,"u":1},"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"q":{"a":0,"e":0,"o":0,"i":0,"u":0},"r":{"a":0,"e":0,"o":0,"i":0,"u":0,"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"s":{"a":0,"e":0,"o":0,"i":0,"u":[{"b":{"r":2,"l":2}},0]},"t":{"a":0,"e":0,"o":0,"i":0,"u":0,"s":{"a":1,"e":1,"o":1,"i":1,"u":1},"x":{"a":1,"e":1,"o":1,"i":1,"u":1},"z":{"a":1,"e":1,"o":1,"i":1,"u":1},"r":{"a":1,"e":1,"o":1,"i":1,"u":1}},"v":{"a":0,"e":0,"o":0,"i":0,"u":0},"w":{"a":0,"e":0,"o":0,"i":0,"u":0},"x":{"a":0,"e":0,"o":0,"i":0,"u":0},"y":{"a":0,"e":0,"o":0,"i":0,"u":0},"z":{"a":0,"e":0,"o":0,"i":0,"u":0}}',
    []
  ];
});
