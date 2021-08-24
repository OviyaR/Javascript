// Discount = ( listingPrice - sellingPrice )/ listingPrice * 100
 var sellingPrice = 199;
 var listingPrice = 799;

 var Discount = (( listingPrice - sellingPrice )/ listingPrice) * 100;
 console.log("Discount :" + Discount);
 displayDiscountPrecentage = Math.round(Discount);
 console.log(displayDiscountPrecentage + "% off");