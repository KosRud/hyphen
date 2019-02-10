(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsTe = factory();
  }
}(this, function () {
  var patterns = [], hyphenation = [];
// title: Hyphenation patterns for Telugu
// copyright: Copyright (C) 2016 Santhosh Thottingal
// notice: This file is part of the hyph-utf8 package.
//     See http://www.hyphenation.org/tex for more information.
// source: https://github.com/santhoshtr/hyphenation/
// language:
//     name: Telugu
//     tag: te
// authors:
//   -
//     name: Santhosh Thottingal
//     contact: santhosh.thottingal (at) gmail.com
// licence:
//     - This file is available under any of the following licences:
//     -
//         name: MIT
//         url: https://opensource.org/licenses/MIT
//         text: >
//             Permission is hereby granted, free of charge, to any person
//             obtaining a copy of this software and associated documentation
//             files (the "Software"), to deal in the Software without
//             restriction, including without limitation the rights to use,
//             copy, modify, merge, publish, distribute, sublicense, and/or sell
//             copies of the Software, and to permit persons to whom the
//             Software is furnished to do so, subject to the following
//             conditions:
//
//             The above copyright notice and this permission notice shall be
//             included in all copies or substantial portions of the Software.
//
//             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//             EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//             OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//             NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//             HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//             WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//             FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//             OTHER DEALINGS IN THE SOFTWARE.
//     -
//         name: LGPL
//         version: 3
//         or_later: true
//         url: http://www.gnu.org/licenses/lgpl.html
//     -
//         name: GPL
//         version: 3
//         or_later: true
//         url: http://www.gnu.org/licenses/gpl.html
//
var patterns = [
// GENERAL RULE
// Do not break either side of ZERO-WIDTH JOINER  (U+200D)
"2‍2",
// Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
"1‌1",
// Break before or after any independent vowel.
"అ1",
"ఆ1",
"ఇ1",
"ఈ1",
"ఉ1",
"ఊ1",
"ఋ1",
"ౠ1",
"ఌ1",
"ౡ1",
"ఎ1",
"ఏ1",
"ఐ1",
"ఒ1",
"ఓ1",
"ఔ1",
// Break after any dependent vowel, but not before.
"ా1",
"ి1",
"ీ1",
"ు1",
"ూ1",
"ృ1",
"ౄ1",
"ె1",
"ే1",
"ై1",
"ొ1",
"ో1",
"ౌ1",
// Break before or after any consonant.
"1క",
"1ఖ",
"1గ",
"1ఘ",
"1ఙ",
"1చ",
"1ఛ",
"1జ",
"1ఝ",
"1ఞ",
"1ట",
"1ఠ",
"1డ",
"1ఢ",
"1ణ",
"1త",
"1థ",
"1ద",
"1ధ",
"1న",
"1ప",
"1ఫ",
"1బ",
"1భ",
"1మ",
"1య",
"1ర",
"1ఱ",
"1ల",
"1ళ",
"1వ",
"1శ",
"1ష",
"1స",
"1హ",
// Do not break before chandrabindu, anusvara, visarga,
// length mark and ai length mark.
"2ఁ1",
"2ం1",
"2ః1",
"2ౕ1",
"2ౖ1",
// Do not break either side of virama (may be within conjunct).
"2్2",
""];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
}));
