/*
 * jQuery Cooltip
 * Author: Yves Van Broekhoven
 * Version: 0.0.0
 */
 
(function($){
  
  var init;
  
  $.fn.cooltip = function(){
    _this = this;
    
    this.each(function(){
      
      init(_this);
      
    });
    
  };
  
  $.fn.cooltip.defaults = {
    content: false
  }
  
  init = function(_this){
    console.log(_this.attr('title'));
  }
  
})(jQuery);