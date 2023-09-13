// Modal element
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btnsQuickView = document.querySelectorAll(".btn-quick-view");

// Get modal content
const modalContent = document.getElementById("modal-product");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Loop through the buttons and add event listeners
btnsQuickView.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productName = btn.dataset.product;
    const productPrice = 6900; // TODO: Get the actual price for each product
    modalContent.innerHTML = `
    <div class="product-modal">
      <img style="width: 45px; height: 40px;" src="img/AirPods2Pro.png" alt="${productName}">
      <div class="product-modal-info">
        <h3>AirPods 2 Pro</h3>
        <p> Оригинал AirPods 2 Pro со полнач.</p>
        <p class="product-price"> 6900 MKD </p>
        <a href="#" class="btn btn-main">Нарачај Веднаш</a>
      </div>
    </div>
    `;
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};