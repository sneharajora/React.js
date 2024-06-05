import React from 'react'

import useFetch  from '../hooks/useFetch';
 const A = () => {
    const data = useFetch("https://freetestapi.com/api/v1/users");
     console.log("data",data);
  return (
    <div>
       <h2>Github Users</h2>
    </div>
  )
};
export default A;

