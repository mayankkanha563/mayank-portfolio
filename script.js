// Page Navigation
function showPage(page) {
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => {
    page.classList.remove('active');
  });

  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}

// Keyboard Navigation (Optional)
document.addEventListener("keydown", function(e) {
  if (e.key === 'h') showPage('home');
  if (e.key === 'a') showPage('about');
  if (e.key === 'p') showPage('projects');
  if (e.key === 'c') showPage('contact');
});

// Typing Effect for Home Page
var text = "Welcome To My Portfolio ✨";
var j = 0;
function type() {
  if (j < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(j);
    j++;
    setTimeout(type, 60);
  }
}
type();

// Skill Animation (jQuery)
$(document).ready(function(){
  $(".skill-progress").each(function(){
    var $this = $(this);
    var percent = $this.attr("data-percent");
    $({countNum: 0}).animate({countNum: percent}, {
      duration: 2000,
      easing: 'swing',
      step: function() {
        $this.css("width", this.countNum + "%");
        $this.text(Math.floor(this.countNum) + "%");
      },
      complete: function() {
        $this.text(percent + "%");
      }
    });
  });
});
