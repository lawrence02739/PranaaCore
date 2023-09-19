const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/Prannacore`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  }

module.exports = DBconnect;