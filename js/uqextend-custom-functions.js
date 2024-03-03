window.addEventListener("load", function () {
  //Initialise all tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  //Add a button to open an offcanvas menu with links to other important sites.
  $("body").append(
    '<button class="btn btn-dark mr-3 mt-3 position-fixed top-0 end-0" style="box-shadow: none;" type="button" data-bs-toggle="offcanvas" data-bs-target="#supportMenu" aria-controls="supportMenu" id="supportLinksBtn">Support Links</button><div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="supportMenu" aria-labelledby="supportMenu"><div class="offcanvas-header text-bg-uq"><h4 class="text-bg-uq offcanvas-title mb-1" id="offcanvasWithBothOptionsLabel">Support Links Menu</h4><button type="button" style="box-shadow: none;" class="btn btn-uq text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><span class="fa fa-close"></span></button></div><div class="offcanvas-body"><ul class="lh-lg list-unstyled" id="supportLinksList"><li><a class="text-decoration-none" href="https://web.library.uq.edu.au/contact-us" title="UQ AskUs" target="_blank" rel="noopener">AskUs Website</a></li><li><a class="text-decoration-none" href="https://learn.uq.edu.au/" title="Learn.UQ" target="_blank" rel="noopener">Learn.UQ Dashboard</a></li><li><a class="text-decoration-none" href="https://edstem.org/au/dashboard" title="ED Discussion Dashboard" target="_blank" rel="noopener">ED Discussion Dashboard</a></li></ul></div></div>'
  );
  //if the site is ENGG1100 append additional links to the support menu
   const civl2135 = [ 
     "[CIVL2135] Introduction to Environmental Engineering (St Lucia). Semester 1, 2024",
   ];
   const engg1100 = [
     "[ENGG1100] Professional Engineering (St Lucia). Semester 1, 2024",
   ];
if (engg1100.includes($('span.course-name').text())){
  $("div#supportMenu ul").append('<li><a class="text-decoration-none" href="https://uqeait.github.io/learnuq/engg1100faqs.html" target="_blank" title="ENGG1100 FAQs Website" rel="noopener">ENGG1100 FAQs Website</a></li>');
}
/*if (civl2135.includes($("span.course-name").text())) {
   $("body").append(
     '<p class="d-block mx-auto w-50"><a id="echo360Enrol" class="btn btn-success btn-lg mt-5 position-fixed w-50 d-block mx-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to enrol in the Echo360 Collection which should resolve your access issues" style="top: 75px;" href="https://echo360.net.au/collection/09ae5e72-079e-4516-abbb-39acfc20be4e/public" target="_blank" title="Enrol in CIVL2135 Echo360 Collection">Enrol in Echo360 Collection</a>'
   );
   $('#echo360Enrol').on('click', function () {
     localStorage.setItem("echo360Enrolled", "true"); // Store that the button was clicked
     document.getElementById("echo360Enrol").remove(); // Remove the button
     })
   // Check if the button was already clicked
     if (localStorage.getItem("echo360Enrolled") === "true") {
       // If clicked, remove the button (if it hasn't already been removed)
       let enrolled = document.getElementById("echo360Enrol");
       if (enrolled) {
         enrolled.remove();
       }
     } else {
       // If not clicked, attach the click event listener
       document
         .getElementById("echo360Enrol")
         .addEventListener("click", function () {
     localStorage.setItem("echo360Enrolled", "true"); // Store that the button was clicked
     document.getElementById("echo360Enrol").remove(); // Remove the button
     });
     }
}*/
  //Add a go to bookmarks link next to the bookmark this page link
  var currentLocation = window.location.href;
  var bookmarkSlice = currentLocation.slice(32, 65);
  var bookmarkURL =
    "window.open('/courses" + bookmarkSlice + "/bookmarks/','_blank')";
  $(".bookmark-button-wrapper").append(
    '<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>'
  );
  $(".gotobookmarksbtn").attr("onclick", bookmarkURL);
  var formLinkCount = $(".bugOrSuggestion").length;
  if (formLinkCount <= 0) {
    var formsLink = "window.open('https://forms.office.com/r/5kNvhxasnB')";
    $(".bookmark-button-wrapper").append(
      '<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>'
    );
    $(".bugOrSuggestion").attr("onclick", formsLink);
  } else {
    console.log("Form link already present");
  }
  //Ensure all functions also happen again when a user navigates to the next or previous unit page.
  //Always duplicate any function that needs to happen on loading of a page to be inside the function that follows.
  $("button.seq_other").on("click", function (event) {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    var bookmarkCount = $(".bookmark-text").length;
    var formLinkCount = $(".bugOrSuggestion").length;
    if (formLinkCount <= 0) {
      var formsLink = "window.open('https://forms.office.com/r/5kNvhxasnB')";
      $(".bookmark-button-wrapper").append(
        '<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>'
      );
      $(".bugOrSuggestion").attr("onclick", formsLink);
    } else {
      console.log("Form link already present");
    }
    if (bookmarkCount <= 1) {
      var currentLocation = window.location.href;
      var bookmarkSlice = currentLocation.slice(32, 65);
      var bookmarkURL =
        "window.open('/courses" + bookmarkSlice + "/bookmarks/','_blank')";
      $(".bookmark-button-wrapper").append(
        '<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <span class="fa-solid fa-external-link-square"></span></span></button>'
      );
      $(".gotobookmarksbtn").attr("onclick", bookmarkURL);
    } else {
      console.log("Go to bookmarks already present");
    }
  });
  //Make sure that accordions and read more buttons if they have the angle down icons switch on click
  $('a[data-bs-toggle="collapse"]').on("click", function () {
    if (
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-angle-down") ||
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-angle-up") == true
    ) {
      $(this).children().toggleClass("fa-angle-down fa-angle-up");
    } else if (
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-plus") ||
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-mines") == true
    ) {
      $(this).children().toggleClass("fa-plus fa-minus");
    } else if (
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-chevron-down") ||
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-chevron-up") == true
    ) {
      $(this).children().toggleClass("fa-chevron-down fa-chevron-up");
    } else if (
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-caret-down") ||
      $('a[data-bs-toggle="collapse"] i').hasClass("fa-caret-up") == true
    ) {
      $(this).children().toggleClass("fa-caret-down fa-caret-up");
    }
  });
  //if using email badges so students can copy email addresses this code with show to the user on click the email is copied
  var $temp = $("<input>");
  $(".copyBadge").on("click", function () {
    var $copyBadge = $(this);
    var $url = $(this).prev().attr("href");
    var $copyBadgeHTML = $(this).html();
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $copyBadge.html(
      '<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Email copied'
    );
    window.setTimeout(function () {
      $copyBadge.html($copyBadgeHTML);
    }, 2000);
  });
  /*Stop sidescrolling on all echo embed codes*/
  var echoIframe = "https://echo360.net.au";
  var $echoIframeSrc = $('iframe[src*="' + echoIframe + '"]');
  $echoIframeSrc.attr("scrolling", "no");
  /*Back to top button*/
  $("body").prepend(
    '<button class="btn btn-dark" onclick="javascript:document.body.scrollTop = 0;document.documentElement.scrollTop = 0;" id="bttBtn" title="Go to top"><span class="fa-solid fa-arrow-up"></span></button>'
  );
  // Get the button
  let mybutton = document.getElementById("bttBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  // Change 'Show Answer' to 'Show Answer and Feedback' on questions
  $('.show-label').text('Show answer and feedback')
  $('.show-label').addClass('text-wrap')

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});
