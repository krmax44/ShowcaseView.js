var showcaseview = {};

showcaseview.inited = false;

showcaseview.highlightElement = function (options) {
	var element = options.element;

	if (!showcaseview.inited) {
		$("body").append('<div class="showcaseview-view"></div>');
		$(".showcaseview-view").append('<div class="showcaseview-text"></div>').append('<div class="showcaseview-button"><a href="#!" onclick="showcaseview.hide();" class="btn waves-effect">OK</a></div>');
		showcaseview.inited = true;
	}

	if (!options.buttonOnly) {
		$(".showcaseview-view").on("click", showcaseview.hide);
	}

	var $this = $(element);
	var offset = $this.offset();
	var width = $this.outerWidth();
	var height = $this.outerHeight();
	var position = {
		left: offset.left + width / 2,
		top: offset.top + height / 2
	};
	
	$(".showcaseview-view").css({
		"background-position": (position.left - $(element).outerWidth() * 0.75) + "px " + (position.top - $(element).outerHeight()) + "px",
		"background-size": $(element).width() * 2 + "px " + $(element).height() * 2 + "px"
	});
	$(".showcaseview-view .showcaseview-text").text(options.text);

	if (!options.btntext) {
		$(".showcaseview-view .showcaseview-button a").text("OK");
	}
	else {
		$(".showcaseview-view .showcaseview-button a").text(options.btntext);
	}

	$(".showcaseview-view").fadeIn();
};

showcaseview.hide = function () {
	$(".showcaseview-view").fadeOut();
};