var core = core || {};

(function() {
    /* UTILS ***************************************************/

    core.utils = core.utils || {};

    core.utils.getCookieValue = function(key) {
        var equalities = document.cookie.split('; ');
        for (var i = 0; i < equalities.length; i++) {
            if (!equalities[i]) {
                continue;
            }

            var splitted = equalities[i].split('=');
            if (splitted.length != 2) {
                continue;
            }

            if (decodeURIComponent(splitted[0]) === key) {
                return decodeURIComponent(splitted[1] || '');
            }
        }

        return null;
    }

    core.utils.setCookieValue = function (key, value, expireDate, path, domain) {
        var cookieValue = encodeURIComponent(key) + '=';

        if (value) {
            cookieValue = cookieValue + encodeURIComponent(value);
        }

        if (expireDate) {
            cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
        }

        if (path) {
            cookieValue = cookieValue + "; path=" + path;
        }

        if (domain) {
            cookieValue = cookieValue + "; domain=" + domain;
        }

        document.cookie = cookieValue;
    }

    core.utils.deleteCookie = function (key, path) {
        var cookieValue = encodeURIComponent(key) + '=';

        cookieValue = cookieValue + "; expires=" + (new Date(new Date().getTime() - 86400000)).toUTCString();

        if (path) {
            cookieValue = cookieValue + "; path=" + path;
        }

        document.cookie = cookieValue;
    }

    /* AUTHORIZATION **********************************************/
    core.auth = core.auth || {};
    core.auth.getToken = function(tokenKey) {
        return core.utils.getCookieValue(tokenKey);
    }
    core.auth.setToken = function(tokenKey, authToken, expireDate, appPath, domain) {
        core.utils.setCookieValue(tokenKey, authToken, expireDate, appPath, domain);
    }

    /* CONTROL UI **********************************************/
    core.ui = core.ui || {};
    core.ui.owlCarousel = (ation)=>{
        let owl =  $(".testimonials-slides");
        owl.owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            margin: 10,
            items: 4,
            autoplay: false,
            autoplayTimeout: 2000, 
            center: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            }
        });
        ation === "play" ? owl.trigger('play.owl.autoplay',[2000]) : owl.trigger('stop.owl.autoplay');
    };
    
    core.ui.popup = ()=>{
        $('.portfolio-popup').magnificPopup({
            type: 'image',
            preloader: true,
            removalDelay: 300,
            gallery: {
              enabled: true
            },
            zoom: {
              enabled: true,
              duration: 300,
              easing: 'ease-in-out',
              opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            }
        });
    };

    core.ui.openModal = (modal) => {
        $(`#${modal}`).modal('show');
    }

    core.ui.closeModal = (modal) => {
        $(`#${modal}`).modal('hiden');
    }

    core.ui.calcHeight = () => {
        let h = window.innerHeight;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `#main_content { min-height: ${h-130}px; }`;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
})();

/* STRING UTILS HELPER ***************************************************/
if (!String.prototype.isNullOrEmpty) {
    String.prototype.isNullOrEmpty = function () {
        return [null, undefined, ""].indexOf(this) > -1 || this.trim().length === 0;
    };
}

if (!String.prototype.isEqual) {
    String.prototype.isEqual = function(value) {
        return this.valueOf() === value;
    }
}
