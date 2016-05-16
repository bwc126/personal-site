(function($) {
  console.log("app starting");
  // // Get each project on the page
  // // Bind an event trigger to each project
  // var spotlight = function(src) {
  //   console.log('firing spotlight');
  //   $('.jumbotron img').attr('src',src);
  // };
  var picSrc;
  var projects;
  // picList will initially be whatever the default set of projects is, which should be one of the major categories so that they can be reached again later by clicking one of the buttons. It's a simple array of strings formatted to be used as the 'srcset' attribute.
  var picList = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png"
  ];
  // prog, engi, and sci are like picList, but contain the image links for each project within their respective areas.
  var prog = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png"
  ];
  var engi = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png"
  ];
  var sci = [
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png",
    "images/M/Hydra2-M.png 800w, images/L/Hydra2-L.png 1200w",
    "images/S/Hydra2-S.png"
  ];
  // The click triggers for the subject buttons will set the project images to the project images for the appropriate subject area, and then call setSpotlightTriggers to make sure they will change the spotlight upon mouseenter.
  $("#programming").click(function() {
    console.log("Programming active");
    picList = prog;
    renderProjectImages;
    setSpotlightTriggers;
  });
  $("#engineering").click(function() {
    console.log("Engineering Active");
    picList = engi;
    renderProjectImages;
    setSpotlightTriggers;
  });
  $("#science").click(function() {
    console.log("Science Active");
    picList = sci;
    renderProjectImages;
    setSpotlightTriggers;
  });
  // renderProjectImages changes the project images based on whatever subject area has been made active (e.g., when the user clicks the respective button, currently this is the only time this should be called).
  function renderProjectImages() {
    projects = $(".project img");
    $(projects[0]).attr('src', picList[1]);
    $(projects[1]).attr('src', picList[3]);
    $(projects[2]).attr('src', picList[5]);
  }
  // For loop construction doesn't play nicely with serial event listener setting, so specific code is written for each project so that mouseenter on its image causes the spotlight image to change.
  function setSpotlightTriggers() {
    projects = $(".project img");
    $(projects[0]).mouseenter(function() {
      $('.jumbotron img').attr('srcset',picList[0]);
      console.log("Project 0 has spotlight");
    });
    $(projects[1]).mouseenter(function() {
      $('.jumbotron img').attr('srcset',picList[2]);
      console.log("Project 1 has spotlight");
    });
    $(projects[2]).mouseenter(function() {
      $('.jumbotron img').attr('srcset',picList[4]);
      console.log("Project 2 has spotlight");
    });
  };
  setSpotlightTriggers();

})(jQuery);
