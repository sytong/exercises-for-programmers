'use strict';

var flickrPublicFeedServices = angular.module('myApp.services', ['ngResource']);

flickrPublicFeedServices.factory('FlickrPublicFeed', ['$resource',
  function($resource) {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne";
    return $resource(url, {format: 'json', jsoncallback: "JSON_CALLBACK"}, {
      query: {method: 'JSONP', isArray: false}
    });
  }]);