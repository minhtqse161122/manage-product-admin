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
// End handle change status product

// Handle change multiple status
let listIdProduct = [];
const checkboxAllProduct = $("#checkbox-all");
const formChangeMultipleStatus = $("#form-change-multiple-status");
const listProductIdText = $("#list-id-product");
const selectStatus = $("#select-status");
const listCheckboxProduct = $$("[checkbox-product]");

// push all item & pop all item
if (checkboxAllProduct) {
  checkboxAllProduct.addEventListener("change", (event) => {
    if (listCheckboxProduct) {
      if (event.target.checked) {
        listCheckboxProduct.forEach((cb) => {
          cb.setAttribute("checked", true);
          listIdProduct.push(cb.getAttribute("data-id"));
        });
        listProductIdText.setAttribute("value", listIdProduct.join(","));
      } else {
        listCheckboxProduct.forEach((cb) => {
          cb.removeAttribute("checked");
          listIdProduct = [];
        });
        listProductIdText.setAttribute("value", listIdProduct.join(","));
      }
    }
  });
}

//End push all item & pop all item

const handleAddItemToArray = (arr, item, checked) => {
  if (!checked) {
    return arr.filter((p) => p !== item);
  } else {
    arr.push(item);
  }
  return arr;
};

const handleCheckAllOrNot = (arr, arr2) => {
  return arr.length === arr2.length;
};

// push each item
if (listCheckboxProduct) {
  listCheckboxProduct.forEach((cb) => {
    cb.addEventListener("change", (event) => {
      const idProduct = event.target.getAttribute("data-id");
      listIdProduct = handleAddItemToArray(
        listIdProduct,
        idProduct,
        event.target.checked
      );
      if (handleCheckAllOrNot(listCheckboxProduct, listIdProduct)) {
        checkboxAllProduct.setAttribute("checked", true);
      } else {
        checkboxAllProduct.removeAttribute("checked");
      }
    });
  });
}
// end push each item

// Submit form
if (formChangeMultipleStatus) {
  formChangeMultipleStatus.addEventListener("submit", (event) => {
    const selectedValue =
      selectStatus.options[selectStatus.selectedIndex].value;
    const listId = event.target.elements[1].value;
  });
}

// End submit form
// End handle change multiple status
