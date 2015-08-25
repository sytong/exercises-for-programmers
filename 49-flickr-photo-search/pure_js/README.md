# Exercise 49: Flickr Photo Search

This is a very simple Flickr Photo Search using HTML and plain JavaScript. 

The [Flickr Public Feed](https://www.flickr.com/services/feeds/docs/photos_public/) is used as the source. 

The tricky part of this implementation is how to get around the CORS setting in Flickr. Currently, Flickrs only allows clients from origin `www.flickrs.com`. The solution applied here is based on the workaround presented in the [blog post](http://www.nekman.se/cors-jsonp-promises/).

## How to run
Just open `index.html` in a Chrome browser tab.