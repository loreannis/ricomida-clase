$(document).ready(function () {
    $(".preparacion2").dblclick(function () {
        $(this).css({
            "color": "red",
        })
    })
    $(".ingredientes2").dblclick(function () {
        $(this).css({
            "color": "red",
        })
    })
    $(".pp").dblclick(function () {
        $(this).css({
            "color": "red",
        })
    })
    $(".i-i").dblclick(function () {
        $(this).css({
            "color": "red",
        })
    })


$(".titulo1").click(function(){
    $(".contenido1").toggle();
})

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

})


