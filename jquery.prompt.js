if (typeof jQuery != 'undefined') {
  (function($) {
    $.fn.prompt = function(prompt_text, options) {
      this.live('blur', function() {  
        if ($(this).data('prompt_clicked') || $(this).val() === '') {
          $(this).val(prompt_text);
          $(this).data('prompt_clicked', true);
          if (options) {
            $(this).attr('class', 'promptfield ghosted');
          }
        }
      });

      this.live('focus', function() {
        if ($(this).data('prompt_clicked')) {
          $(this).val('');
          $(this).data('prompt_clicked', false);
          if (options) {
            $(this).attr('class', 'promptfield');
          }
        }
      });
      
      return this.each(function() {
        if ($(this).data('prompt_loaded')) {
          return;
        }
        $(this).data('prompt_loaded', true);
        $(this).data('prompt_clicked', false);
        if ($(this).val() === '') {
          $(this).val(prompt_text);
          $(this).data('prompt_clicked', true);
          if (options) {
            $(this).attr('class', 'promptfield ghosted');
          }
        }
      });
    };
  })(jQuery);
}
