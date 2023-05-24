import LeftNav from '../../Components/Left/LeftNav'
import RightNav from '../../Components/Right/RightNav'
import './JobSearch.css'



function JobSearch(){
    const cities = [
        'Prishtina',
        'Pristina',
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
    return(
        <>
        <LeftNav />

            <div className="container">
                <div className='title-n-search'>
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
            </div>

        <RightNav />
        </>
    )
}

export default JobSearch