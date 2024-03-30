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

const listId = $("#list-id");
const checkboxAllButton = $("#checkbox-all");
const formChangeMultilpleStatus = $("#form-change-multiple-status");
const listCheckBox = $$("[checkbox-product]");

const handlePushToArray = (arr, productId) => {
  const indexOfProductId = arr.findIndex((id) => id === productId);
  if (indexOfProductId === -1) {
    arr.push(productId);
  }
  return arr;
};

const checkAll = (arr) => {
  let isCheckAllCb = true;
  arr.forEach((item) => {
    if (item.checked === false) {
      isCheckAllCb = false;
    }
  });
  return isCheckAllCb;
};

if (checkboxAllButton) {
  checkboxAllButton.addEventListener("change", (event) => {
    if (event.target.checked) {
      listCheckBox.forEach((cb) => {
        cb.checked = true;
      });
    } else {
      listCheckBox.forEach((cb) => {
        cb.checked = false;
      });
    }
  });
}

if (listCheckBox.length > 0) {
  listCheckBox.forEach((cb) => {
    const productId = cb.getAttribute("data-id");
    cb.addEventListener(
      "change",
      (event) => {
        if (event.target.checked) {
          checkboxAllButton.checked = checkAll(listCheckBox);
        } else {
          checkboxAllButton.checked = checkAll(listCheckBox);
        }
      },
      []
    );
  });
}

if (formChangeMultilpleStatus) {
  const selectStatus = $("#select-status");
  formChangeMultilpleStatus.addEventListener("submit", (event) => {
    event.preventDefault();
    const typeChange = event.target.elements[0].value;

    if (typeChange === "delete") {
      const isConfirm = confirm("Are you sure to delele all");
      if (!isConfirm) {
        return;
      }
    }

    let ids = [];

    if (typeChange === "none") {
      alert("Please choose these methods below");
      selectStatus.focus();
    } else {
      if (typeChange === "change-position") {
        listCheckBox.forEach((cb) => {
          if (cb.checked) {
            const productId = cb.getAttribute("data-id");
            const positionProduct = cb
              .closest("tr")
              .querySelector("input[name='position']").value;

            ids.push(`${productId}-${positionProduct}`);
          }
        });
      } else {
        listCheckBox.forEach((cb) => {
          if (cb.checked) {
            const productId = cb.getAttribute("data-id");
            ids.push(productId);
          }
        });
      }

      if (ids.length !== 0) {
        event.target.elements[1].value = ids.join(",");
        formChangeMultilpleStatus.submit();
      } else {
        alert("Please choose at least one product");
      }
    }
  });
}

// End handle change multiple status

// Handle delete product
const deleteButtons = $$("[delete-button]");

if (deleteButtons.length > 0) {
  const formDeleteProduct = $("#form-delete-product");
  const path = formDeleteProduct.getAttribute("data-path");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const isConfirm = confirm("Are you sure to delete");

      if (isConfirm) {
        const productId = btn.getAttribute("data-id");
        formDeleteProduct.action = `${path}/${productId}?_method=DELETE`;
        formDeleteProduct.submit();
      }
    });
  });
}
// End handle delete item
