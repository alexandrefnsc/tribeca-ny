//Meu código de JQuery Pessoal
$(document).ready(function(){
	//-------------------------- HOME

	$('.content-info-01').hover(function() {
		$(this).children('div').children('.img-info').animate({
			width: '190px'
			}, 600, 'easeOutElastic' , function() {
			/* stuff to do after animation is complete */
		});
	}, function() {
		$(this).children('div').children('.img-info').animate({
			width: '171px'
			}, 600, 'easeOutElastic' , function() {
			/* stuff to do after animation is complete */
		});
	});

	$('.content-info-02').hover(function() {
		$(this).children('div').children('.img-info').animate({
			width: '190px'
			}, 600, 'easeOutElastic' , function() {
			/* stuff to do after animation is complete */
		});
	}, function() {
		$(this).children('div').children('.img-info').animate({
			width: '171px'
			}, 600, 'easeOutElastic' , function() {
			/* stuff to do after animation is complete */
		});
	});

	//----------------------- CARDAPIO

	$('.info-sabores').hover(function() {
		$(this).children('.img-sabor').animate({
			width: '220px'
			}, 600, 'easeOutElastic' , function() {
			/* stuff to do after animation is complete */
		});
	}, function() {
		$(this).children('.img-sabor').animate({
			width: '200px'
			}, 600, 'easeOutElastic' , function() {
			/* stuff to do after animation is complete */
		});
	});
	$('#btn_saiba_mais').click(function() {
		if ($('#content_sabores').css('height')>="900px") {
			alert('CHEGAAA!!');
		} else{
			$('#content_sabores').animate({
				height: '+=300px'
				}, 400, function() {
				/* stuff to do after animation is complete */
			});
		};
	});

});
