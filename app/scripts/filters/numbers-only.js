/*globals angular*/
(function (angular) {
  "use strict";
  angular.module('SaFlickr').filter('numbersOnly', function () {
    return function (stringVal) {
      return stringVal.replace(/[^0-9]/g, "");
    };
  });
})(angular);