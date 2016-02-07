console.log('assets/js/scripts.js loaded');

$(document).ready(function () {
    // get the current page and add an 'active' class in the navbar
    pageTitle = pageTitle.toLowerCase();
    $('li.nav-' + pageTitle).addClass('active');
});
