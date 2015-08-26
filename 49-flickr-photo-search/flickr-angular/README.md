# Exercise 49: Flickr Photo Search

This is a very simple Flickr Photo Search using AngularJS.

# JSONP
The solution here is based on [this blog post](http://www.bennadel.com/blog/2610-using-jsonp-with-resource-in-angularjs.htm) on how to use JSONP in Angular resource. I made a minor modification to the callback parameter. Instead of using `callback`, I used `jsoncallback` after reading [this stackoverflow post](http://stackoverflow.com/questions/16362205/jsonflickrfeed-not-defined-when-query-flickr-api).

The JSON data returned from a JSONP request are directly evaulated. The key difference here is that if `callback` is used as the parameter name, the json returned will look like this:
```
jsonFlickrFeed({
  /* data skipped */
})
```
In this case, the browser will look for the `jsonFlickrFeed` function at the global scope.

To avoid this, we can rename the parameter to `jsoncallback`. In this case, we can define a normal handler to process the returned JSON data using a promise:
```
FlickrService.query({tag: 'nature'}).$promise.then(
  function(data){
    /* success */
  },
  function(error){
    /* failure */
  }
);
```
