(function () {
  const app = angular.module('StringExtension', []);
  app.controller('MainController', function () {
    this.response = '';
    this.evaluate = function (inputString) {
      const stringMethod = document.getElementById('stringMethod').value;
      const display = document.getElementById('display');

      if (!inputString) {
        this.response = 'Please insert a string to evaluate.';
        display.innerHTML = '';
      } else {
        display.innerHTML = `'${inputString}'.${stringMethod}( )`;
        switch (stringMethod) {
          case 'hasVowels': this.response = inputString.hasVowels(); break;
          case 'toUpper': this.response = inputString.toUpper(); break;
          case 'toLower': this.response = inputString.toLower(); break;
          case 'ucFirst': this.response = inputString.ucFirst(); break;
          case 'isQuestion': this.response = inputString.isQuestion(); break;
          case 'words': this.response = inputString.words().join(' '); break;
          case 'wordCount': this.response = inputString.wordCount(); break;
          case 'toCurrency': this.response = this.doToCurrency(inputString); break;
          case 'fromCurrency': this.response = this.doFromCurrency(inputString); break;
          case 'inverseCase': this.response = inputString.inverseCase(); break;
          case 'alternatingCase': this.response = inputString.alternatingCase(); break;
          case 'getMiddle': this.response = inputString.getMiddle(); break;
          case 'numberWords': this.response = inputString.numberWords(); break;
          case 'isDigit': this.response = inputString.isDigit(); break;
          case 'doubleCheck': this.response = inputString.doubleCheck(); break;
          case 'reverse': this.response = inputString.reverse(); break;
          default: return null;
        }
      }
    };
    this.doToCurrency = (inputString) => {
      return /[a-z]/i.test(inputString) ? 'Error: Alphabets are not allowed' : inputString.toCurrency();
    };
    this.doFromCurrency = (inputString) => {
      return /[a-z]/i.test(inputString) ? 'Error: Alphabets are not allowed' : inputString.fromCurrency();
    };
  });
})();
