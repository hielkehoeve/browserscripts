// ==UserScript==
// @name       GitHub absolute time
// @namespace  nl.topicus
// @version    0.4
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
    
    //timeline view: by default render all times in date and time format
    $('.commit-group time').each(function()
    {
        GitHubAbsoluteTimeRenderDateTimeString(this);
    });
    //timeline view: rerender all times where no commit time is present in time format
    $('.commit-group .authorship > time:last-child, .commit-group .committer time').each(function()
    {
        GitHubAbsoluteTimeRenderTimeString(this);
    });
        
    //file browser, details of a commit, last commit box when showing the folder contents, last commit box when showing the history of a file
    $('.tree-browser time, .full-commit time, .commit-tease time, .file-history-tease time').each(function()
    {
        GitHubAbsoluteTimeRenderDateTimeString(this);
    });
    
    setTimeout(GitHubAbsoluteTimeRender, 30000);
}

function GitHubAbsoluteTimeRenderTimeString(element)
{
    var date = GitHubAbsoluteTimeLocalTime(new Date($(element).attr('datetime')));
    $(element).text(GitHubAbsolutePad(date.getUTCHours())+":"+GitHubAbsolutePad(date.getUTCMinutes()));
}

function GitHubAbsoluteTimeRenderDateTimeString(element)
{
    var date = GitHubAbsoluteTimeLocalTime(new Date($(element).attr('datetime')));
    $(element).text(GitHubAbsolutePad(date.getUTCDate())+"-"+GitHubAbsolutePad(date.getUTCMonth()+1)+"-"+date.getUTCFullYear()+" "+GitHubAbsolutePad(date.getUTCHours())+":"+GitHubAbsolutePad(date.getUTCMinutes()));
}

GitHubAbsoluteTimeRender();
