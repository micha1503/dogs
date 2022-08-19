import { useState, useEfect } from "react";

const useSWR = url => {
    const [data, setData] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [error, setError ] = useState(null)

    useEfect(() =>{
  const fetchResource = async () => {
      try{
     let res = await fetch('https://api.thedogapi.com/v1/images/search') 
     let data = data = await res.json()
     setData(data) 
     setLoading(false) 
      } catch ( error) {
          setLoading(false)
          setError(error)
      }
  }
   fetchResource()

    },[url] )
 return { data, loading,error }
}

export default useSWR