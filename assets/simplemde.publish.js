(function($, Symphony) {
	'use strict';

	$(window).on('load', function() {

    var simplemde = new SimpleMDE({
      // for options see: https://github.com/NextStepWebs/simplemde-markdown-editor/
      element: $('textarea[class*="markdown"], textarea[class*="commonmark"]')[0],
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

})(window.jQuery, window.Symphony);
