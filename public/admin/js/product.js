// Handle change status product
const changeStatusButton = $$("[btn-change-status]");
console.log(changeStatusButton);
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
      // formChangeStatus.setAttribute("action", newAction);
      // formChangeStatus.submit();
      window.location.href =
        "http://localhost:3000/admin/products/change-status/unactive/123";
    });
  });
}
// End handle change status product
