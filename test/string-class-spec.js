const expect = require('chai').expect;
require('../src/js/string-class');

describe('String Class Test Suite', () => {
  // hasVowels test suite
  describe('#hasVowels', () => {
    const stringWithVowels = 'This has vowels';
    const stringWithoutVowels = 'cry dry fly';
    it('should return true if the string contains vowels.', () => {
      expect(stringWithVowels.hasVowels()).to.equal(true);
    });
    it('should return false if the string does not contain vowels.', () => {
      expect(stringWithoutVowels.hasVowels()).to.equal(false);
    });
  });

  // toUpper test suite
  describe('#toUpper', () => {
    const stringFirst = 'andela';
    const stringSecond = 'MiXeD CasEs';
    it('should return lower case string in question but with all characters in upper cases.', () => {
      expect(stringFirst.toUpper()).to.equal('ANDELA');
    });
    it('should return mixed case string in question but with all characters in upper cases.', () => {
      expect(stringSecond.toUpper()).to.equal('MIXED CASES');
    });
  });

  // toLower test suite
  describe('#toLower', () => {
    const stringA = 'ANDELA IS AWESOME';
    it('should return upper case string in question but with all characters in lower cases.', () => {
      expect(stringA.toLower()).to.equal('andela is awesome');
    });
  });

  // ucFirst test suite
  describe('#ucFirst', () => {
    const stringA = 'tia';
    const stringB = 'andela is awesome';
    it('should return the string in question but change the First Character to an Upper case.', () => {
      expect(stringA.ucFirst()).to.equal('Tia');
    });
    it('should return the string(of words) in question but change the First Character to an Upper case.', () => {
      expect(stringB.ucFirst()).to.equal('Andela is awesome');
    });
  });

  // isQuestion test suite
  describe('#isQuestion', () => {
    const stringA = 'How are you?';
    const stringB = 'How are you? today';
    it('should return true if the string is a question (ending with a question mark).', () => {
      expect(stringA.isQuestion()).to.equal(true);
    });
    it('should return false if the string does not end with a question mark.', () => {
      expect(stringB.isQuestion()).to.to.equal(false);
    });
  });

  // words test suite
  describe('#words', () => {
    const myString = 'Andela-is-awesome.';
    const listOfWords = myString.words();
    it('should return an array of words', () => {
      expect(listOfWords).to.be.an('array');
    });
    it('should return an array of words with symbols stripped off', () => {
      expect(listOfWords).to.deep.equal(['Andela', 'is', 'awesome']);
    });
  });

  // wordCount test suite
  describe('#wordCount', () => {
    const myString = 'Simple String';
    it('should return the number of words in the string.', () => {
      expect(myString.wordCount()).to.equal(2);
    });
  });

  // toCurrency test suite
  describe('#toCurrency', () => {
    const numA = '1234.00';
    const numB = '9876543.21';
    const numC = 'a123456.00';
    it('should return the currency representation of the string.', () => {
      expect(numA.toCurrency()).to.equal('1,234.00');
    });
    it('should return the currency representation of the string.', () => {
      expect(numB.toCurrency()).to.equal('9,876,543.21');
    });
    it('should return an error message if string contains alphabets.', () => {
      expect(numC.toCurrency()).to.equal('Error: Invalid input');
    });
  });

  // fromCurrency test suite
  describe('#fromCurrency', () => {
    const numA = '1,111.11';
    const numB = 'a,123,456.00';
    const numC = '1.,234,.567.00';
    it('should return a number representation of the currency string.', () => {
      expect(numA.fromCurrency()).to.equal(1111.11);
    });
    it('should return an error message if string contains alphabets.', () => {
      expect(numB.fromCurrency()).to.equal('Error: Invalid input');
    });
    it('should return an error message if string is not well constructed', () => {
      expect(numC.fromCurrency()).to.equal('Error: Invalid input');
    });
  });

  // inverseCase test suite
  describe('#inverseCase', () => {
    const myString = 'This is TIA';
    it('should return each letter of the string as an inverse of its current case.', () => {
      expect(myString.inverseCase()).to.equal('tHIS IS tia');
    });
  });

  // alternatingCase test suite
  describe('#alternatingCase', () => {
    const myString = 'Alternating';
    it('should return each letter of the string in alternating cases.', () => {
      expect(myString.alternatingCase()).to.equal('aLtErNaTiNg');
    });
  });

  // getMiddle test suite
  describe('#getMiddle', () => {
    const myOddString = 'Mid';
    const myEvenString = 'Midpoint';
    it('should return the middle character(s) in the string(string length odd).', () => {
      expect(myOddString.getMiddle()).to.equal('i');
    });
    it('should return the middle character(s) in the string(string length even).', () => {
      expect(myEvenString.getMiddle()).to.equal('po');
    });
  });

  // numberWords test suite
  describe('#numberWords', () => {
    const numA = '247';
    const numB = 'nine 11';
    it('should return the number in words.', () => {
      expect(numA.numberWords()).to.equal('two four seven');
    });
    it('should return number in words if string contains alphabets', () => {
      expect(numB.numberWords()).to.equal('nine one one');
    });
  });

  // isDigit test suite
  describe('#isDigit', () => {
    const numA = '3';
    const numB = '33';
    it('should return true if the string is a digit (one number).', () => {
      expect(numA.isDigit()).to.equal(true);
    });
    it('should return false if the string is not a digit (two+ numbers).', () => {
      expect(numB.isDigit()).to.equal(false);
    });
  });

  // doubleCheck test suite
  describe('#doubleCheck', () => {
    const myDoubleString = 'aa';
    const myDoubleStringWord = 'a!!bbc';
    const notDoubleString = 'abab';
    it('should return true if the string contains double successive characters.', () => {
      expect(myDoubleString.doubleCheck()).to.equal(true);
    });
    it('should return true if the string contains double successive characters in a word.', () => {
      expect(myDoubleStringWord.doubleCheck()).to.equal(true);
    });
    it('should return false if the string does not contain double successive characters.', () => {
      expect(notDoubleString.doubleCheck()).to.to.equal(false);
    });
  });
});
