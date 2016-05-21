(function($) {
  console.log("app starting");
  var picSrc;
  var projects;
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
  }
  // renderProjectText prepares the textual content of each project; this function is called when a button is pressed and a new subject area of content needs to be loaded.
  function renderProjectText() {
    projects = $(".project h4");
    console.dir(projects);
    $(projects[0]).text(data[0].project);
    $(projects[1]).text(data[1].project);
    $(projects[2]).text(data[2].project);
  };
  function renderProjectLinks() {
    // Populate links with correct urls.
    projects = $(".project-link");
    $(projects[0]).attr("href", data[0].link);
    $(projects[1]).attr("href", data[1].link);
    $(projects[2]).attr("href", data[2].link);
  };
  function renderProjectLinkDomains() {
    // Render correct domain for project link, which is the text that's actually displayed for the link.
    projects = $(".project-link");
    $(projects[0]).text(data[0].domain);
    $(projects[1]).text(data[1].domain);
    $(projects[2]).text(data[2].domain);
  };
  function renderProjectModals() {
    // Render projects in the modal, including: name, image, and descriptive text.
    projects = $(".modal-dialog p");
    $(projects[0]).text(data[0].desc);
    $(projects[1]).text(data[1].desc);
    $(projects[2]).text(data[2].desc);
  };
  function renderProjectModalImages() {
    projects = $(".modal-dialog img");
    $(projects[0]).attr("src", data[0].thumb);
    $(projects[1]).attr("src", data[1].thumb);
    $(projects[2]).attr("src", data[2].thumb);
  }
  // renderProjectImages changes the project images based on whatever subject area has been made active (e.g., when the user clicks the respective button, currently this is the only time this should be called).
  function renderProjectImages() {
    projects = $(".project img");
    $(projects[0]).attr('src', data[0].thumb);
    $(projects[1]).attr('src', data[1].thumb);
    $(projects[2]).attr('src', data[2].thumb);
  };
  // For loop construction doesn't play nicely with serial event listener setting, so specific code is written for each project so that mouseenter on its image causes the spotlight image to change.
  function setSpotlightTriggers() {
    projects = $(".project img");
    $(projects[0]).mouseenter(function() {
      $('.jumbotron img').attr('src', data[0].src);
      $('.jumbotron img').attr('srcset',data[0].srcset);
      console.log("Project 0 has spotlight");
    });
    $(projects[1]).mouseenter(function() {
      $('.jumbotron img').attr('src', data[1].src);
      $('.jumbotron img').attr('srcset',data[1].srcset);
      console.log("Project 1 has spotlight");
    });
    $(projects[2]).mouseenter(function() {
      $('.jumbotron img').attr('src', data[2].src);
      $('.jumbotron img').attr('srcset',data[2].srcset);
      console.log("Project 2 has spotlight");
    });
  };
  setSpotlightTriggers();
})(jQuery);