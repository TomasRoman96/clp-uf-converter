import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { ObjProperties, SelectProperties } from '../interfaces/SelectProperties';

const Select = ({ NameSelect, UrlQuery, useStateObject, useStateSet}: SelectProperties) => {

  const [namesArray, setNamesArray] = useState<ObjProperties[]>([]);

  const HandleSelect = (e:ChangeEvent<HTMLSelectElement>) =>{
      useStateSet({ ...useStateObject, [NameSelect]: parseInt(e.target.value)});
  }
  useEffect(() => {
    axios.get<ObjProperties[]>(`${UrlQuery}`).then((res) => {
      const { data } = res;
      setNamesArray(data);
    });
  }, []);

  return (
    <select className="form-select" name={NameSelect}
    onChange={e => {HandleSelect(e)}}
    >
      <option>SELECCIONE UNA OPCION</option>
      {namesArray.map(({ ID, Name }) => (<option value={ID} key={ID}>{Name}</option>))}
    </select>
  )
}

export default Select