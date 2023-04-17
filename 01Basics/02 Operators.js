var sellingPrice = 199;
var listPrice = 799;
var discountPrice = (((listPrice - sellingPrice) / listPrice)) * 100;
console.log(discountPrice);
displayDiscountPercentage = Math.round(discountPrice);
console.log(displayDiscountPercentage);