// Notificación de "Nuevos lugares"

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

// Botón de "Ir al cielo"

$(document).ready(function(){

	$('.up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.up').slideDown(500);
		} else {
			$('.up').slideUp(500);
		}
	});

});