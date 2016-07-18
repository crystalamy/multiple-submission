/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-18 15:38:30
 * @version $Id$
 */
$(function(){
	$('.choose_item').click(function(){
		if ($(this).hasClass('choose_item_choose')) {
			$(this).removeClass('choose_item_choose');
		}else{
			$(this).addClass('choose_item_choose');
		};
		var chooselen = $('.choose_item_choose').length;
		if (chooselen >= 5) {
			$('.choose_over').addClass('choose_over_on');
		}else{
			$('.choose_over').removeClass('choose_over_on');
		};
		
	})
	$('.choose_over').click(function(event) {
		if (!$(this).hasClass('choose_over_on')) {
			alert('请选择5项')
		}else{
			alert('选择成功')
		};

	});
})
