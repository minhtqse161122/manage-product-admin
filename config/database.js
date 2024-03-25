const mongoose = require("mongoose");

/**
 * @function Hàm Async / Await
 * @description Thực hiện nhiệm vụ kết nối tới database
 * @param {String} connectionString - connection string
 */

module.exports.connectDB = async (connectionString) => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database was connected");
  } catch (error) {
    console.log("Database was error: ", error);
  }
};
