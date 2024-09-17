import{useState,useEffect} from 'react';

const useFetch=(url)=>{
   
        const [data,setData]=useState(null);
        const [isLoading,setIsLoading]=useState(true);
        const [error,setError]=useState(null);

        useEffect(()=>{

         const abortCont=new AbortController();

        setTimeout(()=>{
          fetch(url,{signal:abortCont.signal})
             .then(res=>{
                console.log(res);
                if(!res.ok){
                   throw Error("Could not fetch the data required");
                   
                }
                return res.json();
             })
             .then(data=>{
                setData(data);
                setIsLoading(false);
                setError(null);
             })
             .catch((e)=>{
               if(e.name==='AbortError'){
                  console.log('fetch aborted')
               }else{
                  setIsLoading(false);
                  setError(e.message);
               }
               
    
             })
             },2000);
             
             return()=>abortCont.abort();
        //here we are fetching data
       },[url]);//it doesnt return anything so we dont have to store it in a variable
       return {data,isLoading,error}
}
export default useFetch;