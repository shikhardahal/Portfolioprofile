function showAbout() {
    hideAll();
    document.getElementById('about').style.display = 'block';
}

function showProjects() {
    hideAll();
    document.getElementById('projects').style.display = 'block';
}

function showContact() {
    hideAll();
    document.getElementById('contact').style.display = 'block';
}

function hideAll() {
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}
