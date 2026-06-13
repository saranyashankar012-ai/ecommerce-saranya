document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Product Added to Cart!");
    });
});

document.querySelector(".hero button").addEventListener("click", () => {
    document.querySelector("#products").scrollIntoView({
        behavior: "smooth"
    });
});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let filter = searchInput.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        let productName =
        card.querySelector("h3").textContent.toLowerCase();

        if(productName.includes(filter)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});