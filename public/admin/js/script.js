const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Filter
const myFiterBtn = $("#filter-btn");
const listStatus = $$("[active-status]");

if (myFiterBtn) {
  if (listStatus.length !== 0) {
    listStatus.forEach((btn) => {
      let newURL = new URL(window.location.href);
      btn.addEventListener("click", () => {
        const valueStatus = btn.getAttribute("active-status");
        if (valueStatus) {
          const currentStatus = btn.getAttribute("active-status");
          newURL.searchParams.set("status", currentStatus);
        }
        window.location.href = newURL;
      });
    });
  }
}

// End Filter

// Clear Filter
const clearFilterBtn = $("#btn-clear-filter");
if (clearFilterBtn) {
  clearFilterBtn.addEventListener("click", () => {
    let newURL = new URL(window.location.href);
    const filterUrl = newURL.href.split("?");
    window.location.href = filterUrl[0];
  });
}

// End Clear Filter
