'use strict';

var flickrControllers = angular.module('myApp.controllers', []);

flickrControllers.controller('FlickrController', ['$scope', 'FlickrPublicFeed', function($scope, Flickr) {
  $scope.search = function() {
    Flickr.query({tags: $scope.searchTerm}).$promise.then(
      function(photos) {
        var images = [];
        photos.items.forEach(function(photo){
          images.push({src: photo.media.m});
        });
        $scope.flickrImages = images;
      },
      function(error) {
        console.log(error);
      }
    );
  }
}]);