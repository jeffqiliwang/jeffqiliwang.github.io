$(document).ready(function (){
    document.getElementById("BUT_INTRODUCTION_PART").onclick = function () {
        var X = $('#INTRODUCTION_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_EXPERIENCE_PART").onclick = function () {
        var X = $('#EXPERIENCE_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_RESEARCH_INTERE_PART").onclick = function () {
        var X = $('#RESEARCH_INTERE_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_RESEARCH_PUB_PART").onclick = function () {
        var X = $('#RESEARCH_PUB_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
})