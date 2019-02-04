import React from 'react';

 const Searchbox=({searchField, searchChange})=>{
     return (
         <div>
            <input className='pa3 ba b--green mb4 bg-lightest-blue' 
             type='search' placeholder='Search Robots'
                 onChange={searchChange}
             />
         </div>
     )
 }

 export default Searchbox;