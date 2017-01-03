const expect = require('chai').expect;
require('../src/js/string-class');

describe('String Class Test Suite', () => {
  // hasVowels test suite
  describe('#hasVowels', () => {
    it('should return true if the string contains vowels.', () => {
      expect('This has vowels'.hasVowels()).to.be.true;
    });
    it('should return false if the string does not contain vowels.', () => {
      expect('cry dry fly'.hasVowels()).to.be.false;
    });
  });

  // toUpper test suite
  describe('#toUpper', () => {
    it('should return lower case string in question but with all characters in upper cases.', () => {
      expect('andela'.toUpper()).to.equal('ANDELA');
    });
    it('should return mixed case string in question but with all characters in upper cases.', () => {
      expect('MIXed Cases'.toUpper()).to.equal('MIXED CASES');
    });
  });

  // toLower test suite
  describe('#toLower', () => {
    it('should return upper case string in question but with all characters in lower cases.', () => {
      expect('ANDELA IS AWESOME'.toLower()).to.equal('andela is awesome');
    });
    it('should return mixed case string in question but with all characters in lower cases.', () => {
      expect('anDeLa iS aWesoME'.toLower()).to.equal('andela is awesome');
    });
  });

  // ucFirst test suite
  describe('#ucFirst', () => {
    it('should return the string in question but change the First Character to an Upper case.', () => {
      expect('tia'.ucFirst()).to.equal('Tia');
    });
    it('should return the string(of words) in question but change the First Character to an Upper case.', () => {
      expect('andela is awesome'.ucFirst()).to.equal('Andela is awesome');
    });
  });

  // isQuestion test suite
  describe('#isQuestion', () => {
    it('should return true if the string is a question (ending with a question mark).', () => {
      expect('How are you?'.isQuestion()).to.be.true;
    });
    it('should return false if the string does not end with a question mark.', () => {
      expect('How are you? today'.isQuestion()).to.to.be.false;
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
    const myNum = ['1234', '9876543.21'];

    it('should return the currency representation of the string.', () => {
      expect(myNum[0].toCurrency()).to.equal('1,234.00');
    });
    it('should return the currency representation of the string.', () => {
      expect(myNum[1].toCurrency()).to.equal('9,876,543.21');
    });
  });

  // fromCurrency test suite
  describe('#fromCurrency', () => {
    const myNum = '1,111.11';

    it('should return a number representation of the currency string.', () => {
      expect(myNum.fromCurrency()).to.equal('1111.11');
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
    const myString = '247';
    const myString2 = 'nine 11'

    it('should return the number in words.', () => {
      expect(myString.numberWords()).to.equal('two four seven');
    });
    it('should return only number in words if string contains alphabets', () => {
      expect(myString2.numberWords()).to.equal('nine one one');
    });
  });

  // isDigit test suite
  describe('#isDigit', () => {
    const myString = '3';
    const myDoubleString = '33';

    it('should return true if the string is a digit (one number).', () => {
      expect(myString.isDigit()).to.be.true;
    });
    it('should return false if the string is not a digit (two+ numbers).', () => {
      expect(myDoubleString.isDigit()).to.to.be.false;
    });
  });

  // doubleCheck test suite
  describe('#doubleCheck', () => {
    const myDoubleString = 'aa'
    const myDoubleStringWord = 'a!!bbc';
    const notDoubleString = 'aba';

    it('should return true if the string contains double successive characters.', () => {
      expect(myDoubleString.doubleCheck()).to.be.true;
    });
    it('should return true if the string contains double successive characters in a word.', () => {
      expect(myDoubleStringWord.doubleCheck()).to.be.true;
    });
    it('should return false if the string does not contain double successive characters.', () => {
      expect(notDoubleString.doubleCheck()).to.to.be.false;
    });
  });

  // reverse test suite
  describe('#reverse', () => {
    it('should return the string in a reverse order', () => {
      expect('backward string'.reverse()).to.equal('gnirts drawkcab');
    });
  });
});
