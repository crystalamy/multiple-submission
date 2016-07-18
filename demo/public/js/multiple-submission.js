/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-18 19:41:59
 * @version $Id$
 */
(function($){
	var privateFunction = function(){

	}
	var methods = {
		destroy:function(){
			return this.each(function() {
				var $this = $(this);
				$this.hover(function() {
					$this.css({
						background: 'yellow'
					});
				}, function() {
					$this.css({
						background: 'red'
					});
				});
			});
		},
		init:function(options){
			return this.each(function(){
				var $this = $(this);
				var defaults = {
					propertyName : 'choose_item',
					changeName:'choose_item_choose'
				}
				$this.click(function(event) {
					$this.addClass(defaults.changeName)
				});
				var settings = $.extend({}, defaults, options);
				
			})
		}
		
	}
	$.fn.multiplesub = function(){
		var method = arguments[0];
		if (methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments,1)
		}else if(typeof(method) == 'object' || !method){
			method = methods.init;
		}else{
			$.error('Method' + method + 'does not exist on jQuery.pluginName');
			return this;
		};
		return method.apply(this,arguments);
	}
})(jQuery);
$(function(){
	
	// $('.choose_item').multiplesub('destroy');
	$('.choose_item').multiplesub('init')
	
	// console.info($('.choose_item').multiplesub('init'))
})
