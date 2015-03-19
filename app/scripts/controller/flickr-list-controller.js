/*globals angular*/
(function (angular) {
  "use strict";
  angular.module('SaFlickr').controller('FlickrListController', ['$scope', 'Flickr', function($scope, flickrService) {
    $scope.photos = [];

    flickrService('london').success(function(data) {
      $scope.photos = data.items;
    });

  }]);
})(angular);