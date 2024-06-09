$(".color-acc-box .color-item").click(function() {
    $(this).toggleClass("active");
});

const rangeInput = document.querySelectorAll(".shop-product .shop .filter .price-acc .wrapper .range-input input"),
    priceInput = document.querySelectorAll(".shop-product .shop .filter .price-acc .wrapper .price-input input"),
    range = document.querySelector(".shop-product .shop .filter .price-acc .wrapper .slider .progress");
let priceGap = 1000;

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