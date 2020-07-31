document.getElementById("aff").style.height = document.getElementsByClassName("myphoto")[0].offsetHeight + "px";
console.log("Hello...", document.getElementsByClassName("myphoto")[0].offsetHeight)
window.onresize = changeSize
function changeSize () {
    document.getElementById("aff").style.height = document.getElementsByClassName("myphoto")[0].offsetHeight + "px";
}
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
    /*
    console.log("Hello...", document.getElementsByClassName("myphoto")[0].offsetHeight)
    document.getElementById("aff").style.height = document.getElementsByClassName("myphoto")[0].offsetHeight + "px";
    document.getElementById('photo').onload=function(){
        // 加载完成
        console.log("Hello", document.getElementById("photo").offsetHeight)
        document.getElementById("aff").style.height = document.getElementById("photo").offsetHeight + "px";
    };
    */
})
