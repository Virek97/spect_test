$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(function () {
	let $textBlock = $("#contact-text-block");
	let $formBlock = $("#contact-form-block");

	$("#show-form-block").on("click", function (event) {
		$formBlock.addClass("active-block");
		$textBlock.removeClass("active-block");
	});
});
