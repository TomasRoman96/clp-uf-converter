import { response, request } from 'express';
import { db } from "../models/models.db"


export const viewMovements = (req = request, res = response) => {

  db.execute(
    "SELECT * FROM viewallmovements;",
    (err, resp) => {
      res.json(resp);
    }
  );
}

export const viewMovementsByDate = (req = request, res = response) => {

  const { date } = req.body;

  db.execute(
    "call ViewMovementsByDate(?);",
    [date],
    (err, resp) => {
      res.json(resp);
    }
  );
}

export const viewDeviceType = (req = request, res = response) => {
  
  db.execute(
    "SELECT * FROM viewdevicetype",
    (err, resp) => {
      res.json(resp);
    }
  );
}


export const insertMovements = (req = request, res = response) => {

  console.log(req.body);
  const { date, hour, amount, amountconverted, deviceOrigin, dateConversion, deviceDestiny } = req.body;
  db.execute(
    "call InsertMovement(?,?,?,?,?,?,?);",
    [date, hour, amount, amountconverted, deviceOrigin, dateConversion, deviceDestiny],
    (err, resp) => {
      console.log(resp);
      res.json(resp);
    }
  );
}

