// ==UserScript==
// @name       BHosted word wrap
// @namespace  nl.topicus
// @version    0.1
// @description  BHosted word wrap
// @match      https://klant.bhosted.nl/dns/*
// @copyright  2015+, Hielke Hoeve
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

$(".tbl td:nth-child(3)").css("word-break", "break-word");
