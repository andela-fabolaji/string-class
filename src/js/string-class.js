/**
 * StringExtension Object
 *
 * This is a simple object that extends the
 * javascript String class with more methods
 *
 * @author Abolaji Femi
 */
const STRING_EXTENSION = {
  /**
   * hasVowels method returns true if
   * the string in question contains one more
   * more vowel characters
   *
   * @return {Bool} string
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper method returns the string with
   * all characters in upper case
   *
   * @return {String} string
   */
  toUpper() {
    return this.replace(/[a-z]/g, (ch) => {
      return String.fromCharCode(ch.charCodeAt(0) - 32);
    });
  },

  /**
   * toLower method returns the string with
   * all characters in lower case
   *
   * @return {String} string
   */
  toLower() {
    return this.replace(/[A-Z]/g, (ch) => {
      return String.fromCharCode(ch.charCodeAt(0) + 32);
    });
  },

  /**
   * ucFirst method returns the string with
   * the first character in upper case
   *
   * @return {String} string
   */
  ucFirst() {
    return this.replace(this.charAt(0), this.charAt(0).toUpper());
  },

  /**
   * isQuestion method returns true if the
   * string is a question (ie. if it contains
   * the question mark symbol)
   *
   * @return {Bool} bool
   */
  isQuestion() {
    return /\?$/.test(this);
  },

  /**
   * words method returns a list of words in the
   * string as an array
   *
   * @return {Object} array
   */
  words() {
    return this.match(/\w+/g);
  },

  /**
   * wordCount method returns the number of
   * words in the string
   *
   * @return {Int} number
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency method returns the currency
   * representation of the string
   *
   * @return {String} string
   */
  toCurrency() {
    const left = this.split('.')[0].replace(/[^0-9]/g, '').reverse()
      .replace(/(\d{3})/g, '$&,')
      .replace(/,$/, '')
      .reverse();

    const right = this.split('.')[1] || '00';
    return `${left}.${right}`;
  },

  /**
   * fromCurrency method returns the number
   * representation of the string
   *
   * @return {Number} number
   */
  fromCurrency() {
    return this.replace(/,+/g, '');
  },

  /**
   * inverseCase method returns each letter of the
   * string as an inverse of its current case
   *
   * @return {String} string
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, (ch) => {
      return /[a-z]/.test(ch) ? ch.toUpper() : ch.toLower();
    });
  },

  /**
   * alternatingCase method returns each letter of the
   * string in alternating cases
   *
   * @return {String} string
   */
  alternatingCase() {
    return this.replace(/[a-zA-Z]/g, (ch, index) => {
      return index % 2 === 0 ? ch.toLower() : ch.toUpper();
    });
  },

  /**
   * getMiddle method returns the middle character(s)
   * of the string
   *
   * @return {String} string
   */
  getMiddle() {
    const midpoint = Math.floor(this.length / 2);

    return this.length % 2 === 0 ? this.slice(midpoint - 1, midpoint + 1)
      : this[midpoint];
  },

  /**
   * numberWords method returns the string
   * of numbers in words
   *
   * @return {String} string
   */
  numberWords() {
    const numWords = {
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

    return this.replace(/\d/g, (ch) => {
      return `${numWords[ch]} `;
    }).trim();
  },

  /**
   * isDigit method returns true if the
   * string is a single digit
   *
   * @return {Bool} bool
   */
  isDigit() {
    return /^\d$/.test(this);
  },

  /**
   * doubleCheck method returns true is the string
   * contains double characters.
   *
   * @return {Bool} boolean
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  },

  /**
   * reverse method returns the string
   * in a reverse order
   *
   * @return {String} string
   */
  reverse() {
    return this.split('').reverse().join('');
  }
};

Object.assign(String.prototype, STRING_EXTENSION);
