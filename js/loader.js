"use strict"

(function($) {
  var images = [];
  var numImg = 0;
  var imgList = [];
  function preload(imgArray) {
    for (var i = 0; i < imgArray.length; i++) {
      images[i] = new Image();
      images[i].src = imgArray[i];
    }
  };
  numImg = collection.length;
  function getImages(coll) {
    for (var i = 0: i < numImg; i++) {
      imgList = coll[i].srcset.split(" ")[2]
    }
  };
  console.log("loader.js loaded");

})(jQuery)
