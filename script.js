/* =========================================================
   BEACON OF LIGHT FOUNDATION NPC
   Main Website JavaScript
========================================================= */


/* 1. MOBILE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");

    if (menuToggle && mainNavigation) {

        function closeMenu() {
            menuToggle.classList.remove("active");
            mainNavigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }

        function openMenu() {
            menuToggle.classList.add("active");
            mainNavigation.classList.add("open");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Close navigation menu");
        }

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNavigation.classList.contains("open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        // Close menu after selecting a navigation link.

        const navigationLinks = mainNavigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                closeMenu();
            });

        });


        // Close menu when clicking outside navigation.

        document.addEventListener("click", function (event) {

            const clickedInsideMenu = mainNavigation.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                closeMenu();
            }

        });


        // Close menu when pressing Escape.

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        });


        // Close mobile navigation when returning to desktop width.

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {
                closeMenu();
            }

        });

    }


    /* 2. AUTOMATIC COPYRIGHT YEAR
    ========================================================= */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
