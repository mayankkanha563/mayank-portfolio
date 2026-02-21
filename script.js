// 1. Navigation Logic
function showPage(pageId) {
    $('.page').removeClass('active');
    $(`#${pageId}`).addClass('active');
    
    if (pageId === 'home') {
        animateSkills();
    }
}

// 2. Typing Effect (Inside Home Only)
const text = "Welcome To My Portfolio ✨";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// 3. Load & Animate Skills
function loadSkills() {
    $.getJSON("skills.json", function(data) {
        let html = '';
        data.forEach(s => {
            html += `
            <div class="skill-item">
                <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:5px;">
                    <strong>${s.name}</strong><span>${s.percent}%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-progress" style="background:${s.color}" data-val="${s.percent}"></div>
                </div>
            </div>`;
        });
        $('#skills-list').html(html);
        setTimeout(animateSkills, 300);
    });
}

function animateSkills() {
    $('.skill-progress').each(function() {
        $(this).css('width', $(this).data('val') + '%');
    });
}

// 4. Three-Way Theme Toggle
let currentTheme = 1;
$('#themeBtn').click(function() {
    $('body').removeClass(`theme-${currentTheme}`);
    currentTheme = (currentTheme % 3) + 1;
    $('body').addClass(`theme-${currentTheme}`);
});

$(document).ready(function() {
    type();
    loadSkills();
});
