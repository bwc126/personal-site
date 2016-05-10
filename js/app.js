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
  var picList = [
    "images/M/proj1-M.png 800w, images/proj1-L.png 1200w",
    "images/Proj2-M.png 800w, images/Proj2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w"
  ];


  var picSrc;
  // For loop construction doesn't play nicely with serial event listener setting
  $(projects[0]).mouseenter(function() {
    picSrc = picList[0];
    $('.jumbotron img').attr('srcset',picSrc);
  });
  $(projects[1]).mouseenter(function() {
    picSrc = picList[1];
    $('.jumbotron img').attr('srcset',picSrc);
  });
  $(projects[2]).mouseenter(function() {
    picSrc = picList[2];
    $('.jumbotron img').attr('srcset',picSrc);
  });

})(jQuery);
