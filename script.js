// 1. Page Navigation Logic
function showPage(pageId) {
    $('.page').removeClass('active');
    $(`#${pageId}`).addClass('active');
    
    // Restart animations if returning to home
    if(pageId === 'home') {
        animateSkills();
    }
}

// 2. Typing Effect
const text = "Welcome To My Portfolio ✨";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

// 3. Load Skills from JSON & Animate
function loadSkills() {
    $.getJSON("skills.json", function(data) {
        let skillsHtml = '';
        data.forEach(skill => {
            skillsHtml += `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${skill.name}</span>
                        <span class="percent-text" data-target="${skill.percent}">0%</span>
                    </div>
                    <div class="skill-bar-bg">
                        <div class="skill-progress" style="background: ${skill.color}" data-percent="${skill.percent}"></div>
                    </div>
                </div>`;
        });
        $('#skills-list').html(skillsHtml);
        animateSkills(); // Run animation after loading
    });
}

function animateSkills() {
    $('.skill-progress').each(function() {
        const percent = $(this).data('percent');
        $(this).css('width', percent + '%');
    });

    // Count up percentage text
    $('.percent-text').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('target')
        }, {
            duration: 1000,
            step: function(now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });
}

// 4. Theme Toggle
$('#themeBtn').click(function() {
    $('body').toggleClass('light-mode');
    $(this).text($('body').hasClass('light-mode') ? "🌙 Dark BG" : "💡 Light BG");
});

// Initialization
$(document).ready(function() {
    typeEffect();
    loadSkills();
});
