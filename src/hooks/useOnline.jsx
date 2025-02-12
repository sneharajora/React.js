import React,{useEffect,useState} from 'react'

const useOnline = () => {

  const [isOnline,setIsOnline]= useState(false);
  console.log("custom hooks");

  useEffect(()=>{
    window.addEventListener("online", ()=> setIsOnline(true));
    window.addEventListener("offline",()=> setIsOnline(false));
  },[])

   return isOnline;
};

export default useOnline;
