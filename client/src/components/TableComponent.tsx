import { ChangeEvent, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { MovementReportArray,MovementReport, TableProperties } from '../interfaces/MovementReportTable';

const TableComponent = ({ UrlQuery }: TableProperties) => {

  const [movementsArrayReport, setMovementsArrayReport] = useState<MovementReportArray[]>([]);
  const [queryMovement,setQueryMovement] = useState<MovementReport>();
  const [refreshTable,setRefreshTable] = useState<boolean>(false);
  const RefreshTable = useRef<boolean>(false);

  return (
    <div className="container table-content">
      <label className="form-label">Ingrese Fecha para buscar movimientos</label>
      <div className="mb-3 d-flex justify-content-center">
        <input type="date" className="form-control" name='date-search' placeholder="dd-mm-yyyy"
        onChange={e => setQueryMovement({ ...queryMovement, date: e.target.value })}
        />
        <button className='btn btn-primary'
        onClick={()=>{setRefreshTable(true); console.log(refreshTable)}}
        >Buscar</button>
      </div>
      <div className='table-responsive'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID MOVIMIENTO</th>
              <th scope="col">FECHA</th>
              <th scope="col">HORA</th>
              <th scope="col">MONTO</th>
              <th scope="col">MONTO CONVERTIDO</th>
              <th scope="col">FECHA CONVERSION</th>
              <th scope="col">NOMBRE MONEDA ORIGEN</th>
              <th scope="col">NOMBRE MONEDA DESTINO</th>
            </tr>
          </thead>
          <tbody>
          {movementsArrayReport.map( (item, key) => {
                 return (
                      <tr key = {key} >
                      <td>{item.ID_MOVIMIENTO}</td>
                      <td>{item.FECHA}</td>
                      <td>{item.HORA}</td>
                      <td>{item.MONTO}</td>
                      <td>{item.MONTO_CONVERTIDO}</td>
                      <td>{item.FECHA_CONVERSION}</td>
                      <td>{item.NOMBRE_MONEDA_ORIGEN}</td>
                      <td>{item.NOMBRE_MONEDA_DESTINO}</td>
                   </tr>
                 )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableComponent