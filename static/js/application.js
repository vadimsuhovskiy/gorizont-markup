jQuery(function() {
  jQuery("input[placeholder], textarea[placeholder]").placeholder();
});

jQuery(document).ready(function() {
  $(".video_list .video").hover(function() {
    var titles = $("div.title");
    var current_title = $(this).find("div.title");

    if (current_title.is(":hidden")) {
      titles.slideUp("fast");
      current_title.eq(0).slideDown("fast");
    } else if (current_title.is(":visible")) {
      current_title.eq(0).slideUp("fast");
    }
  });

  var homePageNews = 1;
  const homeNewsList = document.getElementsByClassName("home_text_news")[0];
  const backButton = document.getElementsByClassName("back-js")[0];
  const nextButton = document.getElementsByClassName("next-js")[0];
  
  function renderHomeNews(items) {
    for (var i = 1; i < items.length + 1; i++) {
      items[i - 1].style.display = "none";
      if (i <= homePageNews * 3 && i > homePageNews * 3 - 3) {
        items[i - 1].style.display = "list-item";
      }
    }
    backButton.style.visibility = homePageNews == 1 ? 'hidden' : 'visible';
    nextButton.style.visibility = items.length <= homePageNews * 3 ? 'hidden' : 'visible';
  }
  if (homeNewsList){
    
    const homeNewsItems = homeNewsList.getElementsByTagName("li");

    renderHomeNews(homeNewsItems);

    nextButton.onclick = function(e){
    e.preventDefault()
    homePageNews++;
    renderHomeNews(homeNewsItems)
    };

    backButton.onclick = function(e){
    e.preventDefault()
    homePageNews--;
    renderHomeNews(homeNewsItems)
  };

  }
  

});
