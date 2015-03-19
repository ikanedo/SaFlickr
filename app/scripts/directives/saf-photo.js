/*globals angular*/
(function (angular) {
  "use strict";
  angular.module('SaFlickr').directive('safPhoto', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/saf-photo.html',
      scope: {
        photoUrl: '=',
        photoTitle: '='
      },
      controller: function ($scope, $filter, localStorageService) {
        var uniqueId = 'safPhoto' + $filter('numbersOnly')($scope.photoUrl);

        $scope.isActive = !!localStorageService.get(uniqueId);

        $scope.toggleActive = function (isToggled) {
          $scope.isActive = !isToggled;

          if ($scope.isActive) {
            localStorageService.set(uniqueId, !isToggled);
          } else {
            localStorageService.remove(uniqueId);
          }
        };
      }
    };
  }]);
})(angular);