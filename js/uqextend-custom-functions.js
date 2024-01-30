window.addEventListener("load", function () {
  //Initialise all tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
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
