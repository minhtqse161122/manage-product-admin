/**
 *
 * @param {query}
 * @param {{limit: number, skip: number}}
 * @returns
 */

module.exports.pagination = (query, { limit, skip }) => {
  let objectPagination = {
    limit,
    skip,
    currentPage: 1,
  };

  if (query.page) {
    if (!isNaN(query.page)) {
      objectPagination.skip = (query.page - 1) * limit;
      objectPagination.currentPage = parseInt(query.page);
    }
  }

  return objectPagination;
};
