# Exercise 49: Flickr Photo Search

This is a very simple Flickr Photo Search using HTML and plain JavaScript. 

The [Flickr Public Feed](https://www.flickr.com/services/feeds/docs/photos_public/) is used as the source. 

# JSONP
The solution here is based on [the blog post](http://www.nekman.se/cors-jsonp-promises/). I made a minor modification to the callback parameter. Instead of using `callback`, I used `jsoncallback` after reading [this stackoverflow post](http://stackoverflow.com/questions/16362205/jsonflickrfeed-not-defined-when-query-flickr-api).

The JSON data returned from a JSONP request are directly evaulated. The key difference here is that if `callback` is used as the parameter name, the json returned will look like this:
```
jsonFlickrFeed({
  /* code skipped */
})
```
In this case, the browser will look for the `jsonFlickrFeed` function at the global scope.

To avoid this, we can rename the parameter to `jsoncallback`. In this case, we can define a normal handler to process the returned JSON data as shown in [the blog post](http://www.nekman.se/cors-jsonp-promises/).

## How to run
Just open `index.html` in a Chrome browser tab.