/**
 *  When filling out a form a users presses the GO button
 *  the keyboard should slide down and the form should submit
 */
if (/* is iOS device */) {
    $(document).on("keypress", function(e) {
        var key = e.which || e.keyCode;

        if ((key === 13) && (e.target.nodeName === 'INPUT')) {
            var $input = $(e.target),
                $form = $input.parents("form");

            $input.blur();
            $form.find("input[type='submit']").click();
        }
    });
}

/**
 * Stop the number entered into a input field with type="number"
 * from incrementally increasing in Firefox when the mousewheel
 * is being scrolled.
 */
 $(document).on("mousewheel DOMMouseScroll", "input[type='number']", function (e) {
     e.preventDefault();
     return false;
 });

/**
 * Prevent the user from zooming in/out on iOS by double tapping
 * or by pinch zooming.
 */
 if (/* is iOS device */) {
     document.addEventListener("touchstart", function (event) {
         var now = +(new Date());

         if (doubleTouchStartTimestamp + 500 > now) {
             event.preventDefault();
         }
         doubleTouchStartTimestamp = now;
     });

     document.addEventListener('gesturestart', function (e) {
         e.preventDefault();
     });
 }
