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
   * hasVowels
   *
   * Checks if the string contains at least one vowel character
   *
   * @return {Bool} boolean
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper
   *
   * transforms the string to uppercase characters
   *
   * @return {String} string
   */
  toUpper() {
    return this.replace(/[a-z]/g, (character) => {
      return String.fromCharCode(character.charCodeAt() - 32);
    });
  },

  /**
   * toLower
   *
   * transforms the string to lowercase characters
   *
   * @return {String} string
   */
  toLower() {
    return this.replace(/[A-Z]/g, (character) => {
      return String.fromCharCode(character.charCodeAt() + 32);
    });
  },

  /**
   * ucFirst
   *
   * transforms only the first character of the string to uppercase
   *
   * @return {String} string
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * isQuestion
   *
   * checks if the string ends with a question mark
   *
   * @return {Bool} boolean
   */
  isQuestion() {
    return /\?$/.test(this);
  },

  /**
   * words
   *
   * returns a list of words in the string
   *
   * @return {Object} array
   */
  words() {
    return this.match(/\w+/g);
  },

  /**
   * wordCount
   *
   * returns the total number of words in the string
   *
   * @return {Int} integer
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency
   *
   * returns the currency representation of the string
   *
   * @return {String} stirng
   */
  toCurrency() {
    return Number(this)
      ? Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : 'Error: Invalid input';
  },

  /**
   * fromCurrency
   *
   * returns the number representation of the string
   *
   * @return {Number} number
   */
  fromCurrency() {
    return Number(this.replace(/,/g, '')) || 'Error: Invalid input';
  },

  /**
   * inverseCase
   *
   * returns each letter of the string as an inverse of its current case
   *
   * @return {String} string
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, (character) => {
      if (/[a-z]/.test(character)) return character.toUpper();
      return character.toLower();
    });
  },

  /**
   * alternatingCase
   *
   * returns each letter of the string in alternating cases
   *
   * @return {String} string
   */
  alternatingCase() {
    return this.replace(/[a-zA-Z]/g, (character, index) => {
      if (index % 2 === 0) return character.toLower();
      return character.toUpper();
    });
  },

  /**
   * getMiddle
   *
   * returns the middle character(s) of the string
   *
   * @return {String} string
   */
  getMiddle() {
    const midpoint = Math.floor(this.length / 2);

    return this.length % 2 === 0 ? this.slice(midpoint - 1, midpoint + 1)
      : this[midpoint];
  },

  /**
   * numberWords
   *
   * returns the string of numbers in words
   *
   * @return {String} string
   */
  numberWords() {
    if (/[^0-9]/g.test(this)) return 'Error: Invalid input';
    const numWords = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ];

    return this.replace(/\d/g, (character) => {
      return `${numWords[character]} `;
    }).trim();
  },

  /**
   * isDigit
   *
   * checks if the string is a single digit
   *
   * @return {Bool} boolean
   */
  isDigit() {
    if (/[^0-9]/g.test(this)) return 'Error: Invalid input';
    return /^\d$/.test(this);
  },

  /**
   * doubleCheck
   *
   * checks if the string contains double occurence of a character
   *
   * @return {Bool} boolean
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  },
};

Object.assign(String.prototype, STRING_EXTENSION);
