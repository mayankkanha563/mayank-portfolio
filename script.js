// Page Navigation
function showPage(page){ $(".page").removeClass("active"); $("#" + page).addClass("active"); }

// Keyboard Navigation
$(document).keydown(function(e){ 
  let key = e.key.toLowerCase(); 
  if(key === 'h') showPage('home');
  if(key === 'a') showPage('about');
  if(key === 'p') showPage('projects');
  if(key === 'c') showPage('contact');
});

// Theme Toggle
var themes = ['theme1','theme2','theme3']; 
var i = 0;
$("#themeBtn").click(function(){
    $("body").removeClass(themes[i]);
    i = (i+1)%3;
    $("body").addClass(themes[i]);
    if(i === 0){ $("#themeBtn").html("💡 Light BG"); }
    else if(i === 1){ $("#themeBtn").html("🔥 Warm BG"); }
    else{ $("#themeBtn").html("⚡ Power BG"); }
});

// Typing Animation
var text = "Welcome To My Portfolio ✨"; 
var j = 0;
function type(){ 
  if(j < text.length) { 
    document.getElementById("typing").innerHTML += text.charAt(j); 
    j++; 
    setTimeout(type, 60); 
  } 
}
type();

// Contact Form Submission
$("#contactForm").submit(function(e){ 
  e.preventDefault(); 
  alert("Thank you 💖 Your message has been sent!"); 
  this.reset(); 
});

// jQuery Skill Animation
$(document).ready(function(){
  $(".skill-progress").each(function(){
    var $this = $(this);
    var percent = $this.attr("data-percent");
    $({countNum: 0}).animate({countNum: percent}, {
      duration: 2000,
      easing: 'swing',
      step: function(){ 
        $this.css("width", this.countNum + "%"); 
        $this.text(Math.floor(this.countNum) + "%"); 
      },
      complete: function(){ 
        $this.text(percent + "%"); 
      }
    });
  });
});
