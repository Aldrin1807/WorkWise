
import './RightNav.css'
import 'typeface-dm-sans';

function RightNav(){
    const categories = [
        'Engineering',
        'Design',
        'Marketing',
        'Sales',
        'Finance',
        'Operations',
        'Software Development',
        'Web Development',
      ];
  
    
    return (
        <div className='right-nav'>
            <div className='profile-card'>
                <img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="" className='profile-image' />   
                <ul >
                    <li className='info'>Aldrin Islami</li>
                    <li className='info'>Job Seeker</li>
                </ul>
            </div>
            <div className='nav-items'>
            <h1 className='h-text'>Filter</h1>
                <hr />
                <p className='p-text'>Select Category</p>
                <select id="category" className='select-dropdown'>
                    <option  value="">All categories</option>
                    {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                    ))}
                </select>
                <p className='p-text'>Type of Job</p>
                <ul>
                    <li  className='type'>
                        <input type="checkbox" className='checkbox' />
                        <p className='text'> Full-Time </p>
                        <p className='num-jobs'>(20)</p>
                        </li>
                    <li  className='type'>
                        <input type="checkbox" className='checkbox' />
                       <p className='text'> Part-Time </p>
                       <p className='num-jobs'>(20)</p>
                       </li>
                </ul>
            </div>
        </div>
    )
}
export default RightNav