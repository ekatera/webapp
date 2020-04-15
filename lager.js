/* global menu */

"use strict";

var report =

(function() {
    var showReport =

    function() {
        window.mainContainer.innerHTML = "";
        fetch("https://lager.emilfolino.se/v2/products?api_key=b934232222d8eaa1afdf3bf0da19c8cb")
            .then(function (response) {
                return response.json();
            }).then(function(data) {
                console.log(Object.values(data));
                var table = document.createElement("TABLE");
                var head = document.createElement("h1");
                var topNavigation = document.getElementById("top-nav");
                if (topNavigation) {
                    console.log(topNavigation.parentNode.removeChild(topNavigation));
                }

                head.textContent = "Lagersaldo";
                window.mainContainer.appendChild(head);
                Object.values(data)[0].forEach(function(product) {
                    var row = table.insertRow(0);
                    var name = row.insertCell(0);

                    row.setAttribute('class', 'productName');
                    var quantity = row.insertCell(1);
                    var productName = document.createElement("a");
                    var productStock = document.createElement("a");

                    productName.href = "#";
                    productStock.href = "#";
                    productName.textContent = product.name;
                    productStock.textContent = product.stock;

                    
                    productName.addEventListener('click', function() {
                        renderProduct(product);
                    });
                    name.appendChild(productName);
                    quantity.appendChild(productStock);

                });
                window.mainContainer.appendChild(table);
            });
        menu.showMenu("assignment");
    };

    return {
        showReport: showReport
    };
})(report);

function renderProduct(product) {
    window.mainContainer.innerHTML = "";
    var title = document.createElement("h1");

    title.textContent = product.name;
    var productInfo = document.createElement("p");

    productInfo.textContent = product.description;
    window.mainContainer.appendChild(title);
    window.mainContainer.appendChild(productInfo);
    topMenu();
}
function topMenu() {
    var mainContainer = document.getElementById('root');
    var topNavigation = document.createElement("div");
    var warehouse = document.createElement("a");

    warehouse.href = "#";
    warehouse.textContent = "Warehouse";
    topNavigation.className = "top-nav";
    topNavigation.appendChild(warehouse);
    topNavigation.setAttribute("id", "top-nav");
    mainContainer.appendChild(topNavigation);
    warehouse.addEventListener('click', function() {
        report.showReport();
    });
}
