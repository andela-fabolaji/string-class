'use strict';


/**
 * StringExtension Object
 *
 * This is a simple object that extends the
 * javascript String class with more methods
 *
 * @author Abolaji Femi
 */
var STRING_EXTENSION = {
  /**
   * hasVowels method returns true if
   * the string in question contains one more
   * more vowel characters
   *
   * @return {Bool}
   */
  hasVowels: function () {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper method returns the string with
   * all characters in upper case
   *
   * @return {String}
   */
  toUpper: function () {
    return this.replace(/[a-z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 32);
    });
  },

  /**
   * toLower method returns the string with
   * all characters in lower case
   *
   * @return {String}
   */
  toLower: function () {
    return this.replace(/[A-Z]/g, function(ch) {
      return String.fromCharCode(ch.charCodeAt(0) + 32);
    });
  },

  /**
   * ucFirst method returns the string with
   * the first character in upper case
   *
   * @return {String}
   */
  ucFirst: function () {
    return this.replace(this.charAt(0), this.charAt(0).toUpper());
  },

  /**
   * isQuestion method returns true if the
   * string is a question (ie. if it contains
   * the question mark symbol)
   *
   * @return {Bool}
   */
  isQuestion: function () {
    return /\?$/.test(this);
  },

  /**
   * words method returns a list of words in the
   * string as an array
   *
   * @return {Object}
   */
  words: function () {
    return this.match(/\w+/g);
  },

  /**
   * wordCount method returns the number of
   * words in the string
   *
   * @return {Int}
   */
  wordCount: function () {
    return this.words().length;
  },

  /**
   * toCurrency method returns the currency
   * representation of the string
   *
   * @return {String}
   */
  toCurrency: function () {
    var left = this.split('.')[0].replace(/[^0-9]/g, '').reverse()
      .replace(/(\d{3})/g, '$&,')
      .replace(/,$/, '')
      .reverse();

    var right = this.split('.')[1] || '00'
    return `${left}.${right}`;
  },

  /**
   * fromCurrency method returns the number
   * representation of the string
   *
   * @return {Number}
   */
  fromCurrency: function () {
    return this.replace(/,+/g, '');
  },

  /**
   * inverseCase method returns each letter of the
   * string as an inverse of its current case
   *
   * @return {String}
   */
  inverseCase: function () {
    return this.replace(/[a-zA-Z]/g, function(ch) {
      return /[a-z]/.test(ch) ? ch.toUpper() : ch.toLower();
    });
  },

  /**
   * alternatingCase method returns each letter of the
   * string in alternating cases
   *
   * @return {String}
   */
  alternatingCase: function () {
    return this.replace(/[a-zA-Z]/g, function(ch, index) {
      return index % 2 === 0 ? ch.toLower() : ch.toUpper();
    });
  },

  /**
   * getMiddle method returns the middle character(s)
   * of the string
   *
   * @return {String}
   */
  getMiddle: function () {
    var midpoint = Math.floor(this.length / 2);

    return this.length % 2 === 0 ? this.slice(midpoint - 1, midpoint + 1)
      : this[midpoint];
  },

  /**
   * numberWords method returns the string
   * of numbers in words
   *
   * @return {String}
   */
  numberWords: function () {
    var numWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };

    return this.replace(/\d/g, function(ch) {
      return numWords[ch] + ' ';
    }).trim();
  },

  /**
   * isDigit method returns true if the
   * string is a single digit
   *
   * @return {Bool}
   */
  isDigit: function () {
    return /^\d$/.test(this);
  },

  /**
   * doubleCheck method returns true is the string
   * contains double characters.
   *
   * @return {Bool}
   */
  doubleCheck: function () {
    return /(.)\1/.test(this);
  },

  /**
   * reverse method returns the string
   * in a reverse order
   *
   * @return {String}
   */
  reverse: function () {
    return this.split('').reverse().join('');
  }
};

Object.assign(String.prototype, STRING_EXTENSION);
