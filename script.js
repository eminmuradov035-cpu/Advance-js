const basket = [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {

    const product = {
      name: btn.dataset.name,
      price: btn.dataset.price
    };

    document.dispatchEvent(
      new CustomEvent("basket:add", {
        detail: product
      })
    );
  });
});

document.addEventListener("basket:add", e => {
  basket.push(e.detail);

  const li = document.createElement("li");
  li.textContent = `${e.detail.name} — ${e.detail.price} USD`;
  document.getElementById("basketList").appendChild(li);

  console.log("Product added:", e.detail);
});

document.getElementById("completeOrder").addEventListener("click", () => {
  document.dispatchEvent(
    new CustomEvent("order:completed", {
      detail: {
        email: "eminmuradov035@mail.com",
        address: "Baku, Azerbaijan",
        products: basket
      }
    })
  );
});

document.addEventListener("order:completed", e => {
  alert("Oder Completed");
  console.log("Order data:", e.detail);
});
