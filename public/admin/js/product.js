// Handle change status product
const changeStatusButton = $$("[btn-change-status]");

if (changeStatusButton.length > 0) {
  const formChangeStatus = $("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");

  changeStatusButton.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const currentStatus = event.target.getAttribute("data-status");
      const currentId = event.target.getAttribute("data-id");
      const afterChangeStatus =
        currentStatus === "active" ? "inactive" : "active";

      const newAction = `${path}/${afterChangeStatus}/${currentId}?_method=PATCH`;
      // set up for submit form
      formChangeStatus.setAttribute("action", newAction);
      formChangeStatus.submit();
    });
  });
}
// End handle change status

// Handle change multiple status

let listProductId = [];
const checkboxAllButton = $("#checkbox-all");
const listCheckBox = $$("[checkbox-product]");

const handlePushToArray = (arr, productId) => {
  const indexOfProductId = arr.findIndex((id) => id === productId);
  if (indexOfProductId === -1) {
    arr.push(productId);
  }
  return arr;
};

if (checkboxAllButton) {
  checkboxAllButton.addEventListener("change", (event) => {
    if (event.target.checked) {
      listCheckBox.forEach((cb) => {
        cb.checked = true;
        const productId = cb.getAttribute("data-id");
        listProductId = handlePushToArray(listProductId, productId);
      });
    } else {
      listCheckBox.forEach((cb) => {
        cb.checked = false;
        const productId = cb.getAttribute("data-id");
        listProductId = listProductId.filter((id) => productId !== id);
      });
    }
    console.log(listProductId);
  });
}

const checkAll = (arr) => {
  let isCheckAllCb = true;
  arr.forEach((item) => {
    if (item.checked === false) {
      isCheckAllCb = false;
    }
  });
  return isCheckAllCb;
};

if (listCheckBox.length > 0) {
  listCheckBox.forEach((cb) => {
    const productId = cb.getAttribute("data-id");
    cb.addEventListener(
      "change",
      (event) => {
        if (event.target.checked) {
          checkboxAllButton.checked = checkAll(listCheckBox);
          listProductId = handlePushToArray(listProductId, productId);
        } else {
          checkboxAllButton.checked = checkAll(listCheckBox);
          listProductId = listProductId.filter((id) => productId !== id);
        }
        console.log(listProductId);
      },
      []
    );
  });
}

// End handle change multiple status
