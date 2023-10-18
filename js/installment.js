$(document).ready(function() {
    //////////////////////////////////////////////// Shop filter Price ////////////////////////////////////////////////

    const rangeInput = document.querySelectorAll(".shop-product .shop .filter .pric .wrapper .range-input input"),
        priceInput = document.querySelectorAll(".shop-product .shop .filter .pric .wrapper .price-input input"),
        range = document.querySelector(".shop-product .shop .filter .pric .wrapper .slider .progress");
    let priceGap = 100000;

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {

                priceInput[0].value = minVal.toLocaleString("en-US");
                priceInput[1].value = maxVal.toLocaleString("en-US");
                range.style.right = (minVal / rangeInput[0].max) * 100 + "%";
                range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

});