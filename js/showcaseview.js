/*
	
	(c) 2016 krmax44
	https://github.com/krmax44/ShowcaseView.js/
	Released under the MIT License

*/

var showcaseview = {};

showcaseview.inited = false;
showcaseview.lastOpt = undefined;
showcaseview.active = false;

showcaseview.highlightElement = function (options, fast) {

	showcaseview.lastOpt = options;

	var element = options.element;

	if (!showcaseview.inited) {
		$("body").append('<div class="showcaseview-view"></div>');
		$(".showcaseview-view").append('<div class="showcaseview-text"></div>').append('<div class="showcaseview-button"><a href="#!" onclick="showcaseview.hide();" class="btn waves-effect">OK</a></div>');
		showcaseview.inited = true;
	}

	$(".showcaseview-view").height($(document).height()).width($(document).width());

	if (!options.buttonOnly) {
		$(".showcaseview-view").on("click", function(){
			showcaseview.hide();
		});
	}

	var $this = $(element);
	var offset = $this.offset();
	var width = $this.outerWidth();
	var height = $this.outerHeight();
	var position = {
		left: offset.left + width / 2,
		top: offset.top + height / 2
	};
	
	if (!options.circle) {
		$(".showcaseview-view").css({
			"background-position": (position.left - $(element).width()) + "px " + (position.top - $(element).height()) + "px",
			"background-size": $(element).width() * 2 + "px " + $(element).height() * 2 + "px"
		});
	}
	else {
		$(".showcaseview-view").css({
			"background-position": (position.left - 50) + "px " + (position.top - 50) + "px"
		});
	}

	$(".showcaseview-view .showcaseview-text").text(options.text);

	if (!options.btntext) {
		$(".showcaseview-view .showcaseview-button a").text("OK");
	}
	else {
		$(".showcaseview-view .showcaseview-button a").text(options.btntext);
	}

	if (fast) {
		$(".showcaseview-view").show();
	}
	else {
		$(".showcaseview-view").fadeIn();
	}

	if (options.scroll) {
		$("html, body").animate({
			scrollTop: offset.top - height
		}, 600);
	}

	showcaseview.active = true;
};

showcaseview.hide = function (fast) {
	if (fast) {
		$(".showcaseview-view").hide();
	}
	else {
		$(".showcaseview-view").fadeOut();
	}

	showcaseview.active = false;
};

$(window).on("resize", function(){
	if (showcaseview.active) {
		showcaseview.hide(true);
		showcaseview.highlightElement(showcaseview.lastOpt, true);
	}
});