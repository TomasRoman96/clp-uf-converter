import React, { useState } from 'react';
import './App.css'
import ButtonComponent from './components/ButtonComponent';
import SelectComponent from './components/SelectComponent';
import { MovementProperties } from './interfaces/MovementProperties';
import TableComponent from './components/TableComponent';

let URLBackend = "http://localhost:4000";

const App = () => {

  const [movement, setMovement] = useState<MovementProperties>({
    date: "",
    hour: "",
    amount: 0,
    amountconverted: 0,
    deviceOrigin: 0,
    dateConversion: "",
    deviceDestiny: 0
  });

  return (
    <div>
      <div className='container text-center'>
        <h1>Convertidor CLP - UF</h1>
        <div className='row'>
          <div className='col-6'>
            <div className="mb-3">
              <label className="form-label">Monto a Convertir</label>
              <input type="number"
                value={movement.amount || ''}
                onChange={e => setMovement({ ...movement, amount: parseInt(e.target.value) })}
                className="form-control" name="amount" placeholder='Monto a convertir' />
            </div>
          </div>
          <div className='col-6'>
            <div className="mb-3">
              <label className="form-label">Unidad de Origen</label>
              <SelectComponent
                NameSelect={"deviceOrigin"}
                UrlQuery={`${URLBackend}/clpUf/viewDeviceType`}
                useStateObject={movement}
                useStateSet={setMovement}
              />
            </div>
          </div>
          <div className='col-6'>
            <div className="mb-3">
              <label className="form-label">Fecha Conversion</label>
              <input type="date" className="form-control" name='date-convert' placeholder="dd-mm-yyyy"
                onChange={e => setMovement({ ...movement, dateConversion: e.target.value })}
              />
            </div>
          </div>
          <div className='col-6'>
            <div className="mb-3">
              <label className="form-label">Unidad de Destino</label>
              <SelectComponent
                NameSelect={"deviceDestiny"}
                UrlQuery={`${URLBackend}/clpUf/viewDeviceType`}
                useStateObject={movement}
                useStateSet={setMovement}
              />
            </div>
          </div>
        </div>
        <ButtonComponent TitleButton={"Hacer Conversion"}
          UrlQuery={`${URLBackend}/clpUf/insertMovements`}
          useStateObject={movement}
          useStateSet={setMovement}
        />
      </div>
    </div>
  );
}

export default App;
