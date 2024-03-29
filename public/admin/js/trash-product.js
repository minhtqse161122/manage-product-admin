// Handle recovery product
const recoverButtons = $$("[recover-button]");

if (recoverButtons.length > 0) {
  const formRecovery = $("#form-recovery-product");
  const path = formRecovery.getAttribute("data-path");
  recoverButtons.forEach((btn) => {
    const productId = btn.getAttribute("data-id");
    btn.addEventListener("click", (event) => {
      const isConfirm = confirm("Are you sure to recovert this product");
      if (isConfirm) {
        const action = `${path}/${productId}?_method=PATCH`;
        formRecovery.action = action;
        formRecovery.submit();
      }
    });
  });
}
// End handle recovery button

// Delete Permanently
const permanentlyButtons = $$("[delete-permanently]");
if (permanentlyButtons.length > 0) {
  const formDeletePermanently = $("#form-delete-permanently-product");
  const path = formDeletePermanently.getAttribute("data-path");
  permanentlyButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const productId = btn.getAttribute("data-id");
      const isConfirm = confirm("Delete permanently product, are you sure ?");
      if (isConfirm) {
        const action = `${path}/${productId}?_method=DELETE`;
        formDeletePermanently.action = action;
        formDeletePermanently.submit();
      }
    });
  });
}
// End delete permanently

//Handle recovery all product
const formRecoveryAllProduct = $("#form-recovery-all-product");

if (formRecoveryAllProduct) {
  formRecoveryAllProduct.addEventListener("submit", (event) => {
    const inputIds = $("input[name='list_ids']");
    event.preventDefault();

    let idProducts = [];
    listCheckBox.forEach((cb) => {
      const productId = cb.getAttribute("data-id");
      if (cb.checked) {
        idProducts.push(productId);
      }
    });
    if (idProducts.length === 0) {
      alert("Please choose at least 1 product");
    } else {
      inputIds.value = idProducts.join(",");
      formRecoveryAllProduct.submit();
    }
  });
}

//End handle recovery all product
