// Sidebar menu collapse
var hamburgerMenu = document.querySelector(".hamburger-menu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


hamburgerMenu.onclick = function(){
    sidebar.classList.toggle("collapsed-sidebar");
    container.classList.toggle("large-container");
}

function recommendationModeFunction() {
    var recommend = document.querySelector(".recommendations");
    var videoPlayer = document.querySelector(".play-video");
    if (recommend.style.display === "none") {
        recommend.style.display = "block";
    } else {
        recommend.style.display = "none";
    }
    videoPlayer.classList.toggle("play-video-no-rec");
  }


// jQuery for profile toggle

$(document).ready(function(){
    $("#profile").on('change',function(){
        $(".profile-image").hide();
        $("#" + $(this).val()).fadeIn(700);    
    }).change();
});

// Filter Modal
var filterModal = document.getElementById("filter-modal");

var filterBtn = document.getElementById("filter-btn");

var filterSpan = document.getElementsByClassName("filter-close")[0];
 
filterBtn.onclick = function() {
    filterModal.style.display = "block";
}

filterSpan.onclick = function() {
    filterModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
      filterModal.style.display = "none";
    }
  }


