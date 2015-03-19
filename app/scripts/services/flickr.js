/*globals angular*/
(function (angular) {
  "use strict";
  angular.module('SaFlickr').factory('Flickr', function FlickrFactory($http) {
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=';

    return function(tags) {
      return $http.jsonp(url + tags);
    };
  });
})(angular);
