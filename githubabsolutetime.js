// ==UserScript==
// @name       GitHub absolute time
// @namespace  nl.topicus
// @version    0.3.3
// @description  renders the absolute time instead of the relative time
// @match      https://github.com/*
// @copyright  2012+, Hielke Hoeve
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==
 
function GitHubAbsolutePad(n) 
{
    return n < 10 ? '0' + n : n 
}

function GitHubAbsoluteTimeLocalTime(date) {
    var localOffset = date.getTimezoneOffset() * (60*1000);
    var localTime = date.getTime();
    return new Date(localTime - localOffset);  
}

function GitHubAbsoluteTimeRender()
{
    console.log("Absolute time rendered on GitHub page: "+new Date());
    
    $('.commit-group time').each(function()
    {
        var date = GitHubAbsoluteTimeLocalTime(new Date($(this).attr('datetime')));
        $(this).text(GitHubAbsolutePad(date.getUTCHours())+":"+GitHubAbsolutePad(date.getUTCMinutes()));
    });
  
    $('.tree-browser time, .full-commit time, .commit-tease time, .file-history-tease time').each(function()
    {
        var date = GitHubAbsoluteTimeLocalTime(new Date($(this).attr('datetime')));
        $(this).text(GitHubAbsolutePad(date.getUTCDate())+"-"+GitHubAbsolutePad(date.getUTCMonth()+1)+"-"+date.getUTCFullYear()+" "+GitHubAbsolutePad(date.getUTCHours())+":"+GitHubAbsolutePad(date.getUTCMinutes()));
    });
    
    setTimeout(GitHubAbsoluteTimeRender, 30000);
}

GitHubAbsoluteTimeRender();

