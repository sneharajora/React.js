import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData]  = useState();

    async function getData(){
     const response = await fetch(url);
     const result = response.json();
     setData(result);
    }

    useEffect(()=>{
        getData();
    },[]);
    return data;

  return (
    <div>useFetch</div>
  )
};

export default useFetch;
