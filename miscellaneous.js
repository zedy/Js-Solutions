/**
 * Check if the body has a visible scrollbar
 *
 * Return: bool
 */
function bodyHasScrollbar () {
     var isScrollbarVisible = true;
     var e = $body.get(0);

     isScrollbarVisible = (window.innerWidth === $(window).width()) ? false : true;

     return ((e.scrollHeight > e.clientHeight) && isScrollbarVisible) ? true : false;
 }
