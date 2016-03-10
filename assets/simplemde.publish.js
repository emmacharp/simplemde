(function($, Symphony) {
	'use strict';

	$(window).on('load', function() {
	  $('textarea[class*="markdown"], textarea[class*="commonmark"]').each(function(i) {
	    	    
      new SimpleMDE({
        // for options see: https://github.com/NextStepWebs/simplemde-markdown-editor/
        element: $(this)[0],
        spellChecker: false,
        status: false,
        indentWithTabs: false,
        toolbar: ["heading-1",
                  "heading-2",
                  "heading-3",
                  "|",
                  "bold",
                  "italic",
                  "|",
                  "link",
                  "|",
                  "unordered-list",
                  "ordered-list",
                  "|",
                  "horizontal-rule",]
      });
    });
	});

})(window.jQuery, window.Symphony);
