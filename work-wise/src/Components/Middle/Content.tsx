import { IoMdArrowBack } from 'react-icons/io';
import './Content.css'

export function Search(props:any){
    const cities = [
        'Prishtina',
        'Prizren',
        'Peja',
        'Gjakova',
        'Mitrovica',
        'Ferizaj',
        'Gjilan',
        'Vushtrri',
        'Podujeva',
        'Suhareka',
        'Rahovec',
        'Lipjan',
        'Malisheva',
        'Gracanica',
        'Shtime',
        'Obiliq',
        'Dragash',
        'Deçan',
        'Kamenica',
        'Viti',
        'Klina',
        'Partesh',
        'Zubin Potok',
        'Fushë Kosovë',
        'Kaçanik',
        'Zveçan',
        'Junik',
        'Istog',
        'Klinë',
        'Skenderaj',
      ];
    return (
        <div className='title-n-search'>
            {props.job?(
                <div className='back-icon'>
                <IoMdArrowBack  />
                </div>
            ):(null)}
        <h1 className='title-text'>WorkWise</h1>
        <div className="has-search">
        <span className="fa fa-search form-control-feedback" />
        <input type="text" className="form-control" placeholder="Search here" />
        <div  style={{borderLeft: '1px solid #DCDCDC', height: '1.3rem',borderColor:'#DCDCDC'}} />
            <select id="location" className='citys-dropdown'>
                <option  value="">Select City</option>
                {cities.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
                ))}
        </select>
        </div>

    </div>
    )
}
