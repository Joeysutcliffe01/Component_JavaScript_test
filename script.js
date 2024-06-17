// ----------------------------------------------------------------------------------------------------Selectors
const checkbox = document.querySelector(".sale");
const productData = document.querySelectorAll(".product-data");
const selectElement = document.querySelector(".order");
const productsContainer = document.querySelector(".products");
const productsArray = Array.from(productsContainer.children);

const results = []

const word1 = "({[}])'`'"
const word2 = "({[])'`'"

const checker = word => {

    for(let i = 0; i < word.length; i++){

    console.log("Word:",i,":",word1[i])
}
  
}

checker(word1)

// for(let i = 0; i < word1.length; i++){
//     console.log("Word:",i,":",word1[i])
// }


document.addEventListener("DOMContentLoaded", () => {

// ----------------------------------------------------------------------------------------------------Handlers
    // ------------------------Handler for the on-sale checkbox
    const handleOnSaleCheckbox = () => {
        productData.forEach(div => {
            const isOnSale = div.querySelector(".product-old-price");
            if (checkbox.checked) {
                div.parentElement.style.display = isOnSale ? '' : 'none';
            } else {
                div.parentElement.style.display = '';
            }
        });
    };

    // ------------------------Handler for sorting
    const handleSorting = () => {

        const getPriceValue = priceText => parseFloat(priceText.replace(/[^\d.-]/g, ''));
        const getNameValue = nameText => nameText.toLowerCase();

        productsArray.sort((a, b) => {
            const priceA = getPriceValue(a.querySelector(".product-price").textContent);
            const priceB = getPriceValue(b.querySelector(".product-price").textContent);
            const nameA = getNameValue(a.querySelector(".product-name").textContent);
            const nameB = getNameValue(b.querySelector(".product-name").textContent);

            switch (selectElement.value) {
                case "0":
                    return priceA - priceB;
                case "1":
                    return priceB - priceA;
                case "2":
                    return nameA.localeCompare(nameB);
                case "3":
                    return nameB.localeCompare(nameA);
                default:
                    return 0;
            }
        });

        // ------------------------Reappend sorted products to the container
        productsArray.forEach(product => productsContainer.appendChild(product));
    };

// ----------------------------------------------------------------------------------------------------Event Listeners
    checkbox.addEventListener("change", handleOnSaleCheckbox);
    selectElement.addEventListener("change", handleSorting);
});