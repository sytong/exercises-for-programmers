$(document).ready(function(){
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var $images = $('#images');
  var $searchTerm = $('#search-panel > input');
  var $search = $('#search');

  var flickr = function(tags, tagMode, loadImage) {
    $.ajax({
      url: url,
      data: {
        tags: tags,
        tagmode: tagMode,
        format: "json"
      },
      dataType: 'jsonp',
      success: addImages,
      error: function(response, status) {
        console.log(response);
      }
    });
  };

  var addImages = function(data) {
    $images.empty();
    for (var i=0; i<5; i++) {
      var $row = $('<div class="row">').appendTo($images);
      for (var j=0; j<4; j++) {
        var $col = $('<div class="col-md-3">').appendTo($row);
        var $a = $('<a href="#" class="thumbnail">').appendTo($col);
        $a.append($('<img>').attr('src', data.items[i * 4 + j].media.m))
      }
    }
  };

  $search.on('click', function(){
    flickr($searchTerm.val(), "all", addImages);
  });
});