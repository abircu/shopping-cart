function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let porductNumber = productInput.value;
  if (isIncreasing == true) {
    porductNumber = parseInt(porductNumber) + 1;
  } else if (isIncreasing == false && porductNumber > 0) {
    porductNumber = parseInt(porductNumber) - 1;
  }
  productInput.value = porductNumber;
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = porductNumber * price;
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const porductNumber = parseInt(productInput.value);
  return porductNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}
function removeProduct(item) {
  document.getElementById(item + "-disply").style.display = "none";
}

document.getElementById("phone-plus").addEventListener("click", () => {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", () => {
  updateProductNumber("phone", 1219, false);
});

document.getElementById("phone-remove").addEventListener("click", () => {
  removeProduct("phone");
});
document.getElementById("case-remove").addEventListener("click", () => {
  removeProduct("case");
});

document.getElementById("case-plus").addEventListener("click", () => {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", () => {
  updateProductNumber("case", 59, false);
});
document.getElementById("check-button").addEventListener("click", () => {
  alert("we have received your order successfully");
});
