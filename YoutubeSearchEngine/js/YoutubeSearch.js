$(document).ready(function () {
var searchField = $('#query')  ;
var icon = $('#search-btn');

$(searchField).on('focus',function() {
  $(this).animate({width:'100%'},400);
  $(icon).animate({right:'10px'},400);
});

$(searchField).on('blur',function() {
  if (searchField.val()=='') {
    $(searchField).animate({width:'45%'},400,function(){});
    $(icon).animate({right:'360px'},400,function(){});
  }
});

$('#search-form').submit(function(e) {
  e.preventDefault();
});
})

function search() {
  $('#results').html('');
  $('#buttons').html('');

  q = $('#query').val();

  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part: 'snippet, id',
      q: q,
      type: 'video',
      key: 'AIzaSyDE87DVPktZuNSFIUK98CLT5oeGY1QGJ4k'},
      function(data) {
      var nextPageToken = data.nextPageToken;
      var prevPageToke = data.prevPageToke;
      console.log(data);
      $.each(data.items,function (i,item) {
        var output = getOutput(item);
        $('#results').append(output);
      })
    });
  }

  function getOutput(item) {
    var videoid = item.id.videoId;
    var title  = item.snippet.title;
    var desc = item.snippet.description;
    var thumb  = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate  = item.snippet.publishedAt;

    var output =
    '<li>'+
    '<div class="list-left">'+
      '<img src="'+thumb+'">'+
    '</div>'+
    '<div class="list-right">'+
      '<h3>'+title+'</h3>'+
      '<small>By <span class="cTitle">'+ channelTitle +'</span> on '+ videoDate +'</small>'+
      '<p>'+ desc +'</p>'+
    '</div>'+
    '</li>'+
    '<div class="clearfix"></div>'+
    '';
    return output;


  }
