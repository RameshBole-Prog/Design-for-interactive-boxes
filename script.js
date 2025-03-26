document.querySelectorAll(".box").forEach(box => {
    let hoverContent = box.querySelector(".hover-content");
    let radioButton = box.querySelector("input[type='radio']");

    box.addEventListener("mouseenter", function () {
        radioButton.checked = true; // Select radio button by default
        hoverContent.style.display = "flex"; // Show dropdowns
        updateTotalPrice(); // Ensure total price updates
    });

    box.addEventListener("mouseleave", function (event) {
        if (!hoverContent.contains(event.relatedTarget)) {
            hoverContent.style.display = "none";
        }
    });

    hoverContent.addEventListener("mouseleave", function (event) {
        if (!box.contains(event.relatedTarget)) {
            hoverContent.style.display = "none";
        }
    });

    // Ensure price updates when the user clicks a radio button
    radioButton.addEventListener("change", updateTotalPrice);
});

// Function to update total price
function updateTotalPrice() {
    let selectedBox = document.querySelector("input[type='radio']:checked");
    if (selectedBox) {
        let box = selectedBox.closest(".box");
        let price = parseFloat(box.dataset.price); 
        let discount = parseFloat(box.dataset.discount);
        let finalPrice = price - (price * discount / 100);
        document.getElementById("total-price").textContent = `$${finalPrice.toFixed(2)}`;
    } else {
        document.getElementById("total-price").textContent = "$0"; 
    }
}

// Add to Cart button click
document.querySelector(".add-to-cart").addEventListener("click", function () {
    alert("Items added to cart!");
    updateTotalPrice();
});
