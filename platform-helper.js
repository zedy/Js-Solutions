/**
 * Simple way to test platform, browser and OS versions
 *
 * Return:
 * - isMobile(): bool
 * - Browser(): string
 * - MobileOS(): string
 * - MobileOS(argument): bool
 * - DesktopOS(): string
 * - DesktopOS(argument): bool
 */
PlatformHelper = function () {
    var userAg = navigator.userAgent.toLowerCase(),
        platform = navigator.platform.toLowerCase(),
        _initialized = false;

    return {
        Init: function() {
            if (_initialized) return;

			_initialized = true;

            PlatformHelper.IsMobile();
        },

        IsMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        Browser: function() {
            var browserName;

            if (userAg.indexOf("opera") != -1)
            	browserName = "opera";

            if (userAg.indexOf("firefox") != -1)
        	   browserName = "firefox";

            if (userAg.indexOf("safari") != -1)
        	   browserName = "safari";

            if (userAg.indexOf("msie") != -1)
        	   browserName = "ie";

            if (userAg.indexOf("chrome") != -1)
        	   browserName = "chrome";

            return (typeof browserName !== "undefined") ? browserName : "other";
        },

        MobileOS: function(query) {
            if (!PlatformHelper.IsMobile())
                return false;

            var type;

            if (typeof query !== "undefined") {
                var conditional = userAg.indexOf(query) > -1;

                return conditional;
            }

            if (userAg.match(/Android/i))
        	   type = "android";

            if (userAg.match(/iPhone/i))
        	   type = "iphone";

            if (userAg.match(/iPad/i))
        	   type = "ipad";

            if (userAg.match(/Windows Phone/i))
        	   type = "winphone";

            if (userAg.match(/BlackBerry/i))
           	   type = "blackberry";

            return (typeof type !== 'undefined') ? type : "other";
        },

        DesktopOS: function(query) {
            if (PlatformHelper.IsMobile())
                return false;

            var type;

            if (typeof query !== "undefined") {
                var conditional = platform.indexOf(query) > -1;

                return conditional;
            }

            if (platform.indexOf("win") > -1)
        	   type = "win";

            if (platform.indexOf("mac") > -1)
        	   type = "mac";

            if (platform.indexOf("linux") > -1)
        	   type = "linux";

            return (typeof type !== 'undefined') ? type : "other";
        }

    };
}();
