$(function(){
  $(".topic-item").click(function(){
    const child = $(this).children(); // Seleciona os filhos do elemento clicado
    if (!child.hasClass("rotate-icon") && !child.hasClass("rotate-icon-back")) {
        child.addClass("rotate-icon");
    } else if (child.hasClass("rotate-icon")) {
        child.removeClass("rotate-icon").addClass("rotate-icon-back");
    } else if (child.hasClass("rotate-icon-back")) {
        child.removeClass("rotate-icon-back").addClass("rotate-icon");
    }
  })
});