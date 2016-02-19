$(document).ready(function(){
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var $images = $('#images');
  var $tags = $('#search-panel > input');
  var $tagMode = $('#search-panel > .selectpicker');
  var $search = $('#search');

  var searchAll = function(tags, tagMode, fn) {
    $.ajax({
      url: url,
      data: {
        tags: tags,
        tagmode: tagMode,
        format: "json"
      },
      dataType: 'jsonp',
      success: fn,
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
        var $col = $('<div class="col-lg-3">').appendTo($row);
        var $a = $('<a href="#" class="thumbnail">').appendTo($col);
        var photo = data.items[i * 4 + j];
        $a.append($('<img>').attr('src', photo.media.m));

        $a.data('title', photo.title);
        $a.data('author', photo.author);
        $a.data('published', photo.published);
        $a.data('tags', photo.tags);
        $a.data('img', photo.media.m);
      }
    }

    $('a.thumbnail').on('click', function() {
      var $a = $(this);
      var $img = $('<img>').attr('src', $a.data('img'));
      var $details = $('#modal-photo-details');

      $('.modal-title').text($a.data('title'));
      $('#modal-thumbnail').empty().append($img);
      $details.find('div:eq(0)').text($a.data('author'));
      $details.find('div:eq(1)').text($a.data('published'));
      $details.find('div:eq(2)').text($a.data('tags'));
      $('#photo-details').modal('show');
    });
  };

  $search.on('click', function(){
    searchAll($tags.val().split(/\s+/).join(","), $tagMode.val(), addImages);
  });
});