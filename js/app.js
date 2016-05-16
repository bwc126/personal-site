(function($) {
  console.log("app starting");
  // // Get each project on the page
  // // Bind an event trigger to each project
  // var spotlight = function(src) {
  //   console.log('firing spotlight');
  //   $('.jumbotron img').attr('src',src);
  // };
  var picSrc;
  var projects = $(".project img");

  var picList = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w"
  ];

  var prog = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w"
  ];
  var engi = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w"
  ];
  var sci = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w"
  ];

  $("#programming").click(function() {
    console.log("Programming active");
  });
  $("#engineering").click(function() {
    console.log("Engineering Active");
  });
  $("#science").click(function() {
    console.log("Science Active");
  });

  // For loop construction doesn't play nicely with serial event listener setting
  function setSpotlightTriggers() {
    $(projects[0]).mouseenter(function() {
      picSrc = picList[0];
      $('.jumbotron img').attr('srcset',picSrc);
      console.log("Project 0 has spotlight");
    });
    $(projects[1]).mouseenter(function() {
      picSrc = picList[1];
      $('.jumbotron img').attr('srcset',picSrc);
      console.log("Project 1 has spotlight");
    });
    $(projects[2]).mouseenter(function() {
      picSrc = picList[2];
      $('.jumbotron img').attr('srcset',picSrc);
      console.log("Project 2 has spotlight");
    });
  };
  setSpotlightTriggers();

})(jQuery);
