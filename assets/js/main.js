$(document).scroll(function() {
    const y = $("html").scrollTop();

    y > 80 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black")

})


// habilitacion tooltips boostrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))