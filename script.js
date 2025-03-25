document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseover", function () {
        this.querySelector("input[type='radio']").checked = true; // Select radio button by default
        this.querySelector(".hover-content").style.display = "flex"; // Display dropdowns
        updateTotalPrice();
    });
    box.addEventListener("mouseleave", function () {
        this.querySelector(".hover-content").style.display = "none"; // Hide dropdowns
    });
});

// Listen for radio button selection changes
document.querySelectorAll("input[type='radio']").forEach(radio => {
    radio.addEventListener("change", updateTotalPrice);
});

function updateTotalPrice() {
    let selectedBox = document.querySelector("input[type='radio']:checked");
    if (selectedBox) {
        let box = selectedBox.closest(".box");
        let price = parseFloat(box.dataset.price); // Convert price to a number
        let discount = parseFloat(box.dataset.discount); // Convert discount to a number
        let finalPrice = price - (price * discount / 100);
        document.getElementById("total-price").textContent = `$${finalPrice.toFixed(2)}`; // Ensure consistent formatting
    } else {
        document.getElementById("total-price").textContent = "$0"; // Reset if no selection
    }
}

document.querySelector(".add-to-cart").addEventListener("click", function () {
    alert("Items added to cart!");
    updateTotalPrice();
});
