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

      const newAction = `${path}/${afterChangeStatus}/${currentId}`;

      // set up for submit form
      formChangeStatus.setAttribute("action", newAction);
      formChangeStatus.submit();
    });
  });
}
// End handle change status product
