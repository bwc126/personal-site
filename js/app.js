(function($) {
  console.log("app starting");
  // Get each project on the page
  // Bind an event trigger to each project
  var spotlight = function(src) {
    console.log('firing spotlight');
    $('.jumbotron img').attr('src',src);
  };
  $('.project').each(function() {
    // Call spotlight to change which project's picture get's the big screen treatment
    var self = this;
    var picSrc = $(self).attr('src');
    console.dir(self);
    $(self).mouseover(picSrc,spotlight(picSrc));
  });
  // Takes in a project and changes the big jumbotron picture to its picture

})(jQuery);
