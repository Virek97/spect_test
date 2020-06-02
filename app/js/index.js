// Відкриття модального вікна для пошуку --------------
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
// ----------------------------------------------------------



// Відкриття форми зворотнього зв'язку для сеції "Contact Us" --------------
$(function () {
	let $textBlock = $("#contact-text-block");
	let $formBlock = $("#contact-form-block");

	$("#show-form-block").on("click", function (event) {
		$formBlock.addClass("active-block");
		$textBlock.removeClass("active-block");
	});
});
// ----------------------------------------------------------



// Відкриття мобільного меню --------------
$(function () {
	let $menuBlock = $("#mobile-menu"); 
	$("#menu-toggle").on("click", function(event){
		event.preventDefault();
		$menuBlock.toggleClass("opened");
	});
	$("#close-menu").on("click", function(event){
		event.preventDefault();
		$menuBlock.toggleClass("opened");
	});
});
// ----------------------------------------------------------




// Відкриття вибору мови в мобільному меню --------------
$(function () {
	let $languagesBlock = $("#select-languages"); 
	$("#show-languages").on("click", function(event){
		event.preventDefault();
		$languagesBlock.toggleClass("opened");
	});
	$("#close-languages").on("click", function(event){
		event.preventDefault();
		$languagesBlock.toggleClass("opened");
	});
});
// ----------------------------------------------------------