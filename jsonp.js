function searchFlickr(tag) {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickerAPI, {
    tags: tag,
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    $.each(data.items, function(i, item) {
      $("<img>").attr("src", item.media.m).appendTo("#imagenes");
    });
  });
};

$(document).ready(function() {
  $("#search").click(function() {
    $("#imagenes").empty();
    var tag = $("#input").val();
    searchFlickr(tag);
  });

  $("#fuenlabrada").click(function() {
    $("#imagenes").empty();
    searchFlickr("fuenlabrada");
  });
});
