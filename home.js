/* global menu */
"use strict";

var home = (function () {
    var showHome = function () {
        var topNavigation = document.getElementById("top-nav");
        if (topNavigation) {
            console.log(topNavigation.parentNode.removeChild(topNavigation));
        }
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Infinity Warehouses";

        var warehouses = document.createElement("p");

        warehouses.textContent = "Welcome to Infinity Warehouses. ";
        warehouses.textContent += "Where products go to desappear.";
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(warehouses);
        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
