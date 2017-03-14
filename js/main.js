'use strict';

var arrowDown    = $('#arrow-down');
var navbar       = $('.navbar-default');
var navHome      = $('.navHome');
var navAbout     = $('.navAbout');
var navResume    = $('.navResume');
var navPortfolio = $('.navPortfolio');
var navContact   = $('.navContact');
var navBlog      = $('.navBlog'); 

$(document).on('ready', function(){
	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 800){
			navbar.addClass('navbar-default');
		}
		else {
			navbar.removeClass('navbar-transform');
		}
	});