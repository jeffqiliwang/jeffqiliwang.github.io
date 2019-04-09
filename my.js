function scrollToAnchor (anchorName) {
    var anchorName;
    anchorElement = document.getElementById(anchorName);
    //如果对应的id锚点存在就跳转
    if (anchorElement) {
        anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
        var scrolledY = window.scrollY;
        if(scrolledY){
            window.scroll(0, scrolledY - 70);
        }
    }
}
function scrollToTarget(anchorName){
    var element = document.getElementById(anchorName);
    var headerOffset = 20;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}