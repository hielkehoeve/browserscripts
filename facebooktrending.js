// ==UserScript==
// @name       Facebook Trending Remover
// @namespace  nl.topicus
// @version    0.1
// @description  removes all the Trending boxes from your timeline
// @match      *://www.facebook.com/*
// @copyright  2012+, Hielke Hoeve
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

function FacebookTrendingRemover()
{
    console.log("Facebook Trending Remover time rendered on page: "+new Date());
    
    $('.storyInnerContent.storyContent').each(function()
    { 
        console.log('item gevonden: '+$(this).find('.passiveName').text()); 
        $(this).css('display', 'none'); 
    });
    
    setTimeout(FacebookTrendingRemover, 30000);
}

setTimeout(FacebookTrendingRemover, 10000);
