// ==UserScript==
// @name       GitHub absolute time
// @namespace  nl.topicus
// @version    0.3.2
// @description  renders the absolute time instead of the relative time
// @match      https://github.com/*
// @copyright  2012+, Hielke Hoeve
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==
 
function pad(n) 
{
    return n < 10 ? '0' + n : n 
}
  
$('.commit-group time').each(function()
{
    var date = new Date($(this).attr('datetime'));
    $(this).text(pad(date.getUTCHours())+":"+pad(date.getUTCMinutes()));
});
  
$('.tree-browser time, .full-commit time, .commit-tease time, .file-history-tease time').each(function()
{
    var date = new Date($(this).attr('datetime'));
    $(this).text(date.getUTCDate()+"-"+date.getUTCMonth()+"-"+date.getUTCFullYear()+" "+pad(date.getUTCHours())+":"+pad(date.getUTCMinutes()));
});

