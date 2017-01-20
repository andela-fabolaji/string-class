  angular.module('StringExtension', [])
    .controller('MainController', function () {
      this.stringMethods = Object.keys(STRING_EXTENSION);
      this.response = '';
      this.evaluate = function (inputString) {
        const stringMethod = document.getElementById('stringMethod').value;
        const display = document.getElementById('display');
        let currentFunc = '';

        if (!inputString) {
          this.response = 'Please insert a string to evaluate.';
        } else {
          currentFunc = `'${inputString}'.${stringMethod}( )`;
          this.response = inputString[stringMethod]();
        }
        display.innerHTML = currentFunc;
      };
    });
