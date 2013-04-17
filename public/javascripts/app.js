(function() {
  this.app = angular.module("TweetFlickr", []);

  this.SearchCtrl = function($scope, $http) {
    $scope.query = "marathon";
    return $scope.search = function(query) {
      var flickrURL, twitterURL;

      twitterURL = "http://search.twitter.com/search.json?q=" + (encodeURIComponent(query)) + "&callback=JSON_CALLBACK";
      flickrURL = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + (encodeURIComponent(query)) + "&jsoncallback=JSON_CALLBACK";
      $scope.loadingTwitter = "Loading...";
      $scope.loadingFlickr = "Loading...";
      $http.jsonp(twitterURL).success(function(data) {
        $scope.tweets = data.results;
        return $scope.loadingTwitter = "";
      }).error(function() {
        return $scope.loadingTwitter = "There was an error loading data from Twitter.";
      });
      return $http.jsonp(flickrURL).success(function(data) {
        console.dir(data.items);
        $scope.images = data.items;
        return $scope.loadingFlickr = "";
      }).error(function() {
        return $scope.loadingFlickr = "";
      });
    };
  };

}).call(this);
