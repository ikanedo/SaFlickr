/*globals angular*/
(function (angular) {
  "use strict";
  angular.module('SaFlickr', [
    'LocalStorageModule'
  ]).
  config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('SaFlickr');
  }]);
})(angular);
