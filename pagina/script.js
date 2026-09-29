// =========================================================
// SCROLL SUAVE PARA BOTÕES
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================================================
// EFEITO NO BOTÃO DE CHECKOUT
// =========================================================

const checkoutButton =
    document.getElementById("checkoutButton");

if (checkoutButton) {

    checkoutButton.addEventListener("click", function () {

        // Aqui você pode adicionar Pixel,
        // Google Analytics ou outros eventos futuramente.

        console.log("Clique no checkout");

    });

}