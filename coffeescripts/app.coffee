@app = angular.module("FlickrTweet", [])

@SearchCtrl = ($scope, $http) ->
  $scope.query = "marathon"  
  $scope.search = (query) ->
    twitterURL = "http://search.twitter.com/search.json?q=#{encodeURIComponent(query)}&callback=JSON_CALLBACK"
    flickrURL = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=#{encodeURIComponent(query)}&jsoncallback=JSON_CALLBACK" 
    $scope.loadingTwitter = "Loading..."
    $scope.loadingFlickr = "Loading..."
    $http.jsonp(twitterURL).success((data) ->
      $scope.tweets = data.results
      $scope.loadingTwitter = ""
    ).error ->
      $scope.loadingTwitter = "There was an error loading data from Twitter."

    $http.jsonp(flickrURL).success((data) ->
      console.dir data.items
      $scope.images = data.items
      $scope.loadingFlickr = ""
    ).error ->
      $scope.loadingFlickr = ""
