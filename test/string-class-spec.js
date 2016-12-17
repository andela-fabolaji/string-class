'use strict';

var expect = require('chai').expect;
var path = require('path');
var STRING_EXTENSION = require(path.join(__dirname, '..', 'src/string-class'));

Object.assign(String.prototype, STRING_EXTENSION);

describe('String Class Test Suite', function () {

  // hasVowels test suite
  describe('#hasVowels', function () {
    it('should return true if the string contains vowels.', function () {
      expect('This has vowels'.hasVowels()).to.be.true;
    });
    it('should return false if the string does not contain vowels.', function () {
      expect('cry dry fly'.hasVowels()).to.be.false;
    });
  });

  // toUpper test suite
  describe('#toUpper', function () {
    it('should return lower case string in question but with all characters in upper cases.', function () {
      expect('andela'.toUpper()).to.equal('ANDELA');
    });
    it('should return mixed case string in question but with all characters in upper cases.', function () {
      expect('MIXed Cases'.toUpper()).to.equal('MIXED CASES');
    });
  });

  // toLower test suite
  describe('#toLower', function () {
    it('should return upper case string in question but with all characters in lower cases.', function () {
      expect('ANDELA IS AWESOME'.toLower()).to.equal('andela is awesome');
    });
    it('should return mixed case string in question but with all characters in lower cases.', function () {
      expect('anDeLa iS aWesoME'.toLower()).to.equal('andela is awesome');
    });
  });

  // ucFirst test suite
  describe('#ucFirst', function () {
    it('should return the string in question but change the First Character to an Upper case.', function () {
      expect('tia'.ucFirst()).to.equal('Tia');
    });
    it('should return the string(of words) in question but change the First Character to an Upper case.', function () {
      expect('andela is awesome'.ucFirst()).to.equal('Andela is awesome');
    });
  });

  // isQuestion test suite
  describe('#isQuestion', function () {
    it('should return true if the string is a question (ending with a question mark).', function () {
      expect('How are you?'.isQuestion()).to.be.true;
    });
    it('should return false if the string does not end with a question mark.', function () {
      expect('How are you? today'.isQuestion()).to.to.be.false;
    });
  });

  // words test suite
  describe('#words', function () {
    var myString = 'Andela-is-awesome.';
    var listOfWords = myString.words();

    it('should return an array of words', function () {
      expect(listOfWords).to.be.an('array');
    });
    it('should return an array of words with symbols stripped off', function () {
      expect(listOfWords).to.deep.equal(['Andela', 'is', 'awesome']);
    });
  });

  // wordCount test suite
  describe('#wordCount', function () {
    var myString = 'Simple String';

    it('should return the number of words in the string.', function () {
      expect(myString.wordCount()).to.equal(2);
    });
  });

  // toCurrency test suite
  describe('#toCurrency', function () {
    var myNumString = '1111.11';
    var myString = 'Andela';

    it('should return the currency representation of the string.', function () {
      expect(myNumString.toCurrency()).to.equal('1,111.11');
    });

    it('should return the string if it\'s not a string of numbers', function () {
      expect(myString.toCurrency()).to.equal('Andela');
    });
  });

  // fromCurrency test suite
  describe('#fromCurrency', function () {
    var myString = '1,111.11';

    it('should return a number representation of the currency string.', function () {
      expect(myString.fromCurrency()).to.equal(1111.11);
    });
  });

  // inverseCase test suite
  describe('#inverseCase', function () {
    var myString = 'This is TIA';

    it('should return each letter of the string as an inverse of its current case.', function () {
      expect(myString.inverseCase()).to.equal('tHIS IS tia');
    });
  });

  // alternatingCase test suite
  describe('#alternatingCase', function () {
    var myString = 'Alternating';

    it('should return each letter of the string in alternating cases.', function () {
      expect(myString.alternatingCase()).to.equal('aLtErNaTiNg');
    });
  });

  // getMiddle test suite
  describe('#getMiddle', function () {
    var myOddString = 'Mid';
    var myEvenString = 'Midpoint';

    it('should return the middle character(s) in the string(string length odd).', function () {
      expect(myOddString.getMiddle()).to.equal('i');
    });
    it('should return the middle character(s) in the string(string length even).', function () {
      expect(myEvenString.getMiddle()).to.equal('po');
    });
  });

  // numberWords test suite
  describe('#numberWords', function () {
    var myString = '247';
    var myString2 = 'nine 11'

    it('should return the number in words.', function () {
      expect(myString.numberWords()).to.equal('two four seven');
    });
    it('should return only number in words if string contains alphabets', function () {
      expect(myString2.numberWords()).to.equal('nine one one');
    });
  });

  // isDigit test suite
  describe('#isDigit', function () {
    var myString = '3';
    var myDoubleString = '33';

    it('should return true if the string is a digit (one number).', function () {
      expect(myString.isDigit()).to.be.true;
    });
    it('should return false if the string is not a digit (two+ numbers).', function () {
      expect(myDoubleString.isDigit()).to.to.be.false;
    });
  });

  // doubleCheck test suite
  describe('#doubleCheck', function () {
    var myDoubleString = new String('aa');
    var myDoubleStringWord = 'a!!bbc';
    var notDoubleString = 'aba';

    it('should return true if the string contains double successive characters.', function () {
      expect(myDoubleString.doubleCheck()).to.be.true;
    });
    it('should return true if the string contains double successive characters in a word.', function () {
      expect(myDoubleStringWord.doubleCheck()).to.be.true;
    });
    it('should return false if the string does not contain double successive characters.', function () {
      expect(notDoubleString.doubleCheck()).to.to.be.false;
    });
  });

  // reverse test suite
  describe('#reverse', function () {
    it('should return the string in a reverse order', function () {
      expect('backward string'.reverse()).to.equal('gnirts drawkcab');
    });
  });

});