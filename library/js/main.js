
// http://alistapart.com/article/the-design-of-code-organizing-javascript

;$(function() {
	$('#js-offcanvas-button').on('click', function(e) {
		e.preventDefault();
		$('.sb-offcanvas-duo-inner').toggleClass('sb-offcanvas-duo-active');
	});
});