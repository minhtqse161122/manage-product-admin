const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Filter
const myFiterBtn = $("#filter-btn");
const listStatus = $$("[active-status]");

if (myFiterBtn) {
  if (listStatus.length > 0) {
    listStatus.forEach((btn) => {
      let url = new URL(window.location.href);
      btn.addEventListener("click", () => {
        const valueStatus = btn.getAttribute("active-status");
        if (valueStatus) {
          url.searchParams.set("status", valueStatus);
        } else {
          url.searchParams.delete("status");
        }
        // Điều hướng web sang một url mới
        window.location.href = url;
      });
    });
  }
}
// End Filter

// Clear Filter
const clearFilterBtn = $("#btn-clear-filter");
if (clearFilterBtn) {
  clearFilterBtn.addEventListener("click", () => {
    let url = new URL(window.location.href);
    if (url.href.includes("?")) {
      const filterUrl = url.href.split("?");
      window.location.href = filterUrl[0];
    }
  });
}
// End Clear Filter

// Find by text search
const formSearch = $("#form-search");

if (formSearch) {
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const valueTextSearch = e.target.elements["keyword"].value;
    if (valueTextSearch.trim()) {
      let url = new URL(window.location.href);
      url.searchParams.set("keyword", valueTextSearch);
      window.location.href = url;
    } else {
      alert("Please input after submit");
    }
  });
}
// End find by text search
