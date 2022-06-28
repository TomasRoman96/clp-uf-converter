import axios from 'axios';
import React, { useEffect } from 'react'
import { ButtonProperties } from '../interfaces/ButtonProperties'
import { UFData } from '../interfaces/UFData';

const Buttons: React.FC<ButtonProperties> = ({ TitleButton, UrlQuery, useStateObject, useStateSet }) => {

  const HandleConvert = () => {
    useStateObject.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    useStateObject.hour = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    HandleGetUfValue();
  }

  const HandleGetUfValue = () => {
    axios.get<UFData>(`https://mindicador.cl/api/uf/${HandleFormatDate()}`).then((res) => {
      const { data } = res;
      if (useStateObject.deviceOrigin === 1 && useStateObject.deviceDestiny === 2) {
        HandleCalcUfToCLP(data)
      }
      else {
        HandleCalcCLPToUF(data)
      };
      HandleSaveMovement();
    });
  }

  const HandleFormatDate = (): string => {
    let formatDateQuery = useStateObject.dateConversion.split("-");
    let dateQuery = `${formatDateQuery[2]}-${formatDateQuery[1]}-${formatDateQuery[0]}`;
    return dateQuery;
  }

  const HandleCalcUfToCLP = (data: UFData) => {
    useStateObject.amountconverted = Math.round(data.serie[0].valor * useStateObject.amount);
  }

  const HandleCalcCLPToUF = (data: UFData) => {
    useStateObject.amountconverted = Math.round(data.serie[0].valor / useStateObject.amount);
  }

  const HandleSaveMovement = () => {
    axios.post(`${UrlQuery}`, useStateObject).then((res) => {
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <button className="btn btn-primary"
      onClick={HandleConvert}
    >{TitleButton}</button>
  )
}

export default Buttons