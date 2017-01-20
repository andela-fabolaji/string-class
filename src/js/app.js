angular.module('StringExtension', [])
  .controller('MainController', ['$scope', ($scope) => {
    $scope.stringMethods = Object.keys(STRING_EXTENSION);
    $scope.response = '';
    $scope.evaluate = () => {
      const stringMethod = document.querySelector('#stringMethod').value;
      const display = document.querySelector('#display');
      const inputString = document.querySelector('#inputString').value;
      const currentFunc = `'${inputString}'.${stringMethod}( )`;

      $scope.response = inputString[stringMethod]();
      display.innerHTML = currentFunc;
    };
  }]);
