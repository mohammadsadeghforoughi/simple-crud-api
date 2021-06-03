var express = require("express");
var router = express.Router();

let ObjectStorage = {
  baskets: [],
  storage: [],
};

router.post("/create_storage", function (req, res, next) {
  ObjectStorage.baskets.includes(req.body.id)
    ? res.status(400).json({
        message: `cannot create storage with id of ${req.body.id}; storge alredy exist`,
      })
    : ObjectStorage.baskets.push(req.body.id) &&
      ObjectStorage.storage.push({ id: req.body.id, data: [] }) &&
      res.json({ message: "storage created successfully" });
});

router.get("/storage", function (req, res, next) {
  if (checkStorage(req.userid)) {
    res.json({
      data: ObjectStorage.storage.find((item) => {
        return item.id == req.userid;
      }).data,
    });
  } else {
    res.status(404).json({ message: "Storage not found" });
  }
});

router.post("/storage", function (req, res, next) {
  if (checkStorage(req.userid)) {
    console.log(req.body.data);
    let userStorage = ObjectStorage.storage.find((item) => {
      return item.id == req.userid;
    });
    console.log(req.userid, userStorage);
    userStorage.data = [...userStorage.data, req.body.data ];

    res.json({ message: "data added successfully" });
  } else {
    res.status(404).json({ message: "Storage not found" });
  }
});

router.patch("/storage", function (req, res, next) {
  if (checkStorage(req.userid)) {
    let userStorage = ObjectStorage.storage.find((item) => {
      return item.id == req.userid;
    });
    let oldData = userStorage.data.find(item=>item.id == req.body.id);
    userStorage.data = userStorage.data.filter(item=>{item.id!=req.body.id})

    oldData = { ...oldData, ...req.body.UpdateData, id: req.body.id}; 
    userStorage.data.push(oldData)
    res.json({ message: "data updated successfully" });
  } else {
    res.status(404).json({ message: "Storage not found" });
  }
});

router.delete("/storage", function (req, res, next) {
  if (checkStorage(req.userid)) {
    let userStorage = ObjectStorage.storage.find((item) => {
      return item.id == req.userid;
    });
    userStorage.data = userStorage.data.filter(item=>{item.id!=req.body.id})

    res.json({ message: "data deleted successfully" });
  } else {
    res.status(404).json({ message: "Storage not found" });
  }
});

const checkStorage = (id) => {
  return ObjectStorage.baskets.includes(id);
};

module.exports = router;
