(function($) {
  console.log("app starting");
  // data will initially be whatever the default set of projects is, which should be one of the major categories so that they can be reached again later by clicking one of the buttons.
  var data = prog;
  // The click triggers for the subject buttons will set the project images to the project images for the appropriate subject area, and then call setSpotlightTriggers to make sure they will change the spotlight upon mouseenter.
  $("#programming").click(function() {
    console.log("Programming active");
    data = prog;
    renderProjects();
  });
  $("#engineering").click(function() {
    console.log("Engineering Active");
    data = engi;
    renderProjects();
  });
  $("#science").click(function() {
    console.log("Science Active");
    data = sci;
    renderProjects();
  });
  function renderProjects() {
    renderProjectText();
    renderProjectLinks();
    renderProjectImages();
    setSpotlightTriggers();
    renderProjectLinkDomains();
    renderProjectModals();
    renderProjectModalImages();
  };
  // renderProjectText prepares the textual content of each project; this function is called when a button is pressed and a new subject area of content needs to be loaded.
  function renderProjectText() {
    $(".project h4").each(function(index) {
      $(this).text(data[index].project);
    });
  };
  function renderProjectLinks() {
    // Populate links with correct urls.
    $(".project-link").each(function(index) {
      $(this).attr("href", data[index].link);
    });
  };
  function renderProjectLinkDomains() {
    // Render correct domain for project link, which is the text that's actually displayed for the link.
    $(".project-link").each(function(index) {
      $(this).text(data[index].domain);
    });
  };
  function renderProjectModals() {
    // Render projects in the modal, including: name, image, and descriptive text.
    $(".modal-dialog p").each(function(index) {
      $(this).text(data[index].desc);
    });
  };
  function renderProjectModalImages() {
    $(".modal-dialog img").each(function(index) {
      $(this).attr("src", data[index].thumb);
    });
  };
  // renderProjectImages changes the project images based on whatever subject area has been made active (e.g., when the user clicks the respective button, currently this is the only time this should be called).
  function renderProjectImages() {
    $(".project img").each(function(index) {
      $(this).attr('src', data[index].thumb);
    });
  };
  // For loop construction doesn't play nicely with serial event listener setting, so specific code is written for each project so that mouseenter on its image causes the spotlight image to change.
  function setSpotlightTriggers() {
    $(".project img").each(function(index) {
      $(this).mouseenter(function() {
        $('.jumbotron img').attr('src', data[index].src);
        $('.jumbotron img').attr('srcset',data[index].srcset);
      });
    });
  };
  setSpotlightTriggers();
})(jQuery);
