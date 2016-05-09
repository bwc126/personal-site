(function($) {
  console.log("app starting");
  // // Get each project on the page
  // // Bind an event trigger to each project
  // var spotlight = function(src) {
  //   console.log('firing spotlight');
  //   $('.jumbotron img').attr('src',src);
  // };
  var projects = $(".project img");
  var numProj = projects.length;

  for (var i = 0; i<(numProj); i++) {

    $(projects[i]).mouseover(function() {
      var picSrc = $(this).attr('src');
      console.log(picSrc);
      (function() {
        console.log('anon spotlight firing');
        $('.jumbotron img').attr('srcset',picSrc);
      }(picSrc));
    });

  };

  // $('.project').each(function() {
  //   // Call spotlight to change which project's picture get's the big screen treatment
  //   var self = this;
  //   var picSrc = $(self).attr('src');
  //   console.dir(self);
  //   self.mouseover(picSrc,spotlight(picSrc));
  // });
  // Takes in a project and changes the big jumbotron picture to its picture

})(jQuery);
