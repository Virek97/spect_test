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



// Відкриття/закриття блоків з інформацією на сторінці товару --------------
$("#show-parameters-block").on("click", function (event) {
	let $parametersBlock = $("#parameters-block");
	let $downloadsBlock = $("#downloads-block");
	let $parametersButton = $("#show-parameters-block");
	let $downloadsButton = $("#show-downloads-block");

	$parametersBlock.addClass("active-block");
	$downloadsBlock.removeClass("active-block");

	$parametersButton.addClass("active-button");
	$downloadsButton.removeClass("active-button");
});
$("#show-downloads-block").on("click", function (event) {
	let $parametersBlock = $("#parameters-block");
	let $downloadsBlock = $("#downloads-block");
	let $parametersButton = $("#show-parameters-block");
	let $downloadsButton = $("#show-downloads-block");

	$downloadsBlock.addClass("active-block");
	$parametersBlock.removeClass("active-block");

	$downloadsButton.addClass("active-button");
	$parametersButton.removeClass("active-button");
});
// ----------------------------------------------------------



// Слайдер фото на сторінці продукт --------------
$(function () {
	$('#slider-product').slick({
		arrows: false,
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
// ----------------------------------------------------------



// Показати/приховати пароль при введенні --------------
$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});
// ----------------------------------------------------------



// Показати/приховати список фільтрів в мобільній версії на сторінці пошуку продукції --------------
$("#show-filter").on("click", function(event){
	event.preventDefault();
	let $filterBlock = $(".filter"); 
	$filterBlock.toggleClass("opened");
});

$(".close-filter").on("click", function(event){
	event.preventDefault();
	let $filterBlock = $(".filter"); 
	$filterBlock.toggleClass("opened");
});
// ----------------------------------------------------------



// Показати/приховати конкретний фільтр на сторінці пошуку продукції --------------
$(".filter-block .hide-filter-toggle").on("click", function(event){
	event.preventDefault();
	let $parentBlock = $(this).parents(".filter-block"); 
	$parentBlock.toggleClass("hidden-block");
});
// ----------------------------------------------------------