$("#myElement").css("color", "red");

document.querySelector("#myElement").style.color = "red";

$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(2000);  
});


