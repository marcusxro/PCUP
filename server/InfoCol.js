const mongoose = require('mongoose');

const atlasUri = 'mongodb+srv://marcussalopaso1:zedmain1525@cluster0.m8fd2iw.mongodb.net/pcup';

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB Atlas (inventory)");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB Atlas:", e);
  });

const mySchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  controlNum: {
    type: String,
  },
  reqDate: {
    type: String,
  },
  unit: {
  },
  Boolean: {
    type: String,
  },
  Boolean: {
    type: String,
  },
  Boolean: {
    type: String,
  },
  Boolean: {
    type: Boolean,
  },
  Boolean: {
    type: String,
  },
  Boolean: {
    type: String,
  },
  explainBrief: {
    type: String,
  },
  brand: {
    type: String,
  },
  inven: {
    type: String,
  },
  accPerson: {
    type: String,
  },
  model: {
    type: String,
  },
  sNumber: {
    type: String,
  },
  access: {
    type: String,
  },
  others: {
    type: String,
  },
  recDate: {
    type: String,
  },
  actionTaken: {
    type: String,
  },
  remarks: {
    type: String,
  },
  status: {
    type: String,
  },
  statDate: {
    type: String,
  },
  inCom: {
    type: String,
  },
  checkedAndRep: {
    type: String,
  }, remarks: {
    type: String,
  },
  noted: {
    type: String,
  },
  endU: {
    type: String,
  },
  conformed: {
    type: String,
  },
  returnedDate: {
    type: String,
  }
});

const Menu = mongoose.model('info', mySchema);

module.exports = Menu;
