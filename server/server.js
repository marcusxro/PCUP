const express = require('express');
const cors = require('cors');
const app = express();
const { ObjectId } = require('mongodb');
const InfoCol = require('./InfoCol')
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('connected');
});

//send info to database
app.post('/reportCreate', async (req, res) => {
    const {
      userName,
      controlNum,
      reqDate,
      unit,
      TShooting,
      LAN,
      preventive,
      Train,
      equip,
      other,
      explainBrief,
      brand,
      inven,
      accPerson,
      model,
      sNumber,
      access,
      others,
      recDate,
      actionTaken,
      remarks,
      status,
      statDate,
      inCom,
      checkedAndRep,
      noted,
      endU,
      conformed,
      returnedDate
    } = req.body;
  
    try {
      const reportsCreate = new InfoCol({
        userName: userName,
        controlNum: controlNum,
        reqDate: reqDate,
        unit: unit,
        TShooting: TShooting,
        LAN: LAN,
        preventive: preventive,
        Train: Train,
        equip: equip,
        other: other,
        explainBrief: explainBrief,
        brand: brand,
        inven: inven,
        accPerson: accPerson,
        model: model,
        sNumber: sNumber,
        access: access,
        others: others,
        recDate: recDate,
        actionTaken: actionTaken,
        remarks: remarks,
        status: status,
        statDate: statDate,
        inCom: inCom,
        checkedAndRep: checkedAndRep,
        noted: noted,
        endU: endU,
        conformed: conformed,
        returnedDate: returnedDate
      });
  
      await reportsCreate.save();
      res.status(201).json({ message: 'Report created successfully' });
    } catch (error) {
      console.error('Error creating report:', error);
      res.status(500).json({ error: 'Error creating report' });
    }
  });
  

  app.get('/getInfo', async (req, res) => {
    InfoCol.find()
    .then((data) => {
      res.json(data)
    }).catch((err) => {
      console.log(err)
    } )
  })

app.listen(8080, () => {
    console.log('server started');
  });
  
  
  