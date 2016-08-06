// Hyphenation patterns for Kannada
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-kn.tex
// Source www.ctan.org

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
    root.hyphenationPatternsKn = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
% GENERAL RULE
% Do not break either side of ZERO-WIDTH JOINER  (U+200D)
2‍2
% Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
1‌1
% Break before or after any independent vowel.
ಅ1
ಆ1
ಇ1
ಈ1
ಉ1
ಊ1
ಋ1
ೠ1
ಌ1
ೡ1
ಎ1
ಏ1
ಐ1
ಒ1
ಓ1
ಔ1
% Break after any dependent vowel, but not before.
ಾ1
ಿ1
ೀ1
ು1
ೂ1
ೃ1
ೄ1
ೆ1
ೇ1
ೈ1
ೊ1
ೋ1
ೌ1
% Break before or after any consonant.
1ಕ
1ಖ
1ಗ
1ಘ
1ಙ
1ಚ
1ಛ
1ಜ
1ಝ
1ಞ
1ಟ
1ಠ
1ಡ
1ಢ
1ಣ
1ತ
1ಥ
1ದ
1ಧ
1ನ
1ಪ
1ಫ
1ಬ
1ಭ
1ಮ
1ಯ
1ರ
1ಱ
1ಲ
1ಳ
1ೞ
1ವ
1ಶ
1ಷ
1ಸ
1ಹ
% Do not break before anusvara, visarga, avagraha,
% length mark and ai length mark.
2ಂ1
2ಃ1
2ಽ1
2ೕ1
2ೖ1
% Do not break either side of virama (may be within conjunct).
2್2
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
