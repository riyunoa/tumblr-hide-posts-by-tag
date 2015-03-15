// ==UserScript==
// @name Hide Tumblr posts by tag
// @description This script hides posts on the tumblr dashboard based on tag
// @match http://*.tumblr.com/*
// @match https://*.tumblr.com/*
// ==/UserScript==

var taglist = ["tag-i-hate", "some-annoying-tag"];

jQuery(window).scroll(function() {
	var regex = new RegExp("#.*(" + taglist.join('|') + ")", "i");
	jQuery("a").filter(function(){
		return regex.test(jQuery(this).text())
	}).parentsUntil('.post_container').remove();
});

