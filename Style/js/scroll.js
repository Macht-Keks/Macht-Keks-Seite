//#####################################################
//Scrolling Animation
//#####################################################

$(function() {
    $("a[href*=#]")
        .stop()
        .click(function() {
            if (
                location.pathname.replace(/^\//, "") ===
                    this.pathname.replace(/^\//, "") &&
                location.hostname === this.hostname
            ) {
                var UD_HASH = this.hash;
                var UD_ZIEL = $(this.hash);
                if (UD_ZIEL.length) {
                    var UD_ABSTAND_TOP = UD_ZIEL.offset().top;
                    $("html,body").animate(
                        { scrollTop: UD_ABSTAND_TOP },
                        1000,
                        function() {
                            window.location.hash = UD_HASH;
                        }
                    );
                    return false;
                }
            }
        });
});

// Highlight

$(document).ready(function() {
    var UD_MENU_ELEMENTS = $("nav ul li a");

    var UD_AKTUELL = 0;
    var UD_OBJEKT_TOP;

    var UD_OBJEKT = $(UD_MENU_ELEMENTS[0]);
    UD_OBJEKT.addClass("ud_menu_aktive");

    $(window).scroll(function() {
        for (var i = 0; i < UD_MENU_ELEMENTS.length; i++) {
            var UD_LINK = $(UD_MENU_ELEMENTS[i]).attr("href");

            if ($(UD_LINK).length) {
                UD_OBJEKT_TOP = $(UD_LINK).offset().top;
            }

            var UD_SCROLL_TOP = $(window).scrollTop();
            var UD_DIF = Math.abs(UD_SCROLL_TOP - UD_OBJEKT_TOP);

            if (i === 0) {
                UD_AKTUELL = UD_DIF;
                UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
                $("nav ul li a").removeClass("ud_menu_aktive");
                UD_OBJEKT.addClass("ud_menu_aktive");
            } else {
                if (UD_DIF < UD_AKTUELL || UD_DIF === UD_AKTUELL) {
                    UD_AKTUELL = UD_DIF;
                    UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
                    $("nav ul li a").removeClass("ud_menu_aktive");
                    UD_OBJEKT.addClass("ud_menu_aktive");
                }
            }
        }
    });
});

