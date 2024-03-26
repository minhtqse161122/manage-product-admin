const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Filter
const myFiterBtn = $("#filter-btn");
const listStatus = $$("[active-status]");

let currentURL = () => {
  return new URL(window.location.href);
};

if (myFiterBtn) {
  if (listStatus.length > 0) {
    listStatus.forEach((btn) => {
      let url = currentURL();
      btn.addEventListener("click", () => {
        const valueStatus = btn.getAttribute("active-status");
        if (valueStatus) {
          url.searchParams.set("status", valueStatus);
          url.searchParams.set("page", 1);
        } else {
          url.searchParams.delete("status");
          url.searchParams.delete("page");
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
    let url = currentURL();
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
      let url = currentURL();
      url.searchParams.set("keyword", valueTextSearch);
      window.location.href = url;
    } else {
      alert("Please input after submit");
    }
  });
}
// End find by text search

//Pagination
const pagesBtn = $$("[data-page]");

if (pagesBtn) {
  pagesBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let url = currentURL();
      const currentPage = btn.getAttribute("data-page");
      if (currentPage) {
        url.searchParams.set("page", currentPage);
        window.location.href = url;
      }
    });
  });
}
//End Pagination

// Handle next , prev pagination
const paginateBtn = $$("[btn-pagination]");
if (paginateBtn) {
  paginateBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let url = currentURL();
      const currentPage = parseInt(btn.getAttribute("currentPage"));
      const totalPage = parseInt(btn.getAttribute("totalPage"));
      const valueForPaginate = btn.getAttribute("btn-pagination");
      if (valueForPaginate !== "next") {
        if (currentPage > 1) {
          url.searchParams.set("page", currentPage - 1);
          window.location.href = url;
        }
      } else {
        if (currentPage < totalPage) {
          url.searchParams.set("page", currentPage + 1);
          window.location.href = url;
        }
      }
    });
  });
}
// End handle next , prev pagination
