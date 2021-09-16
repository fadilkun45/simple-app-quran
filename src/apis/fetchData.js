import { useState,useEffect } from "react"

const FetchData = (url) => {
    
    const[data, setData] = useState()
    const[loadingstat, setLoadingstat] = useState(true)
    const[error, setError] = useState(null)

   useEffect(() => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error("hadeh gagal Fetch")
        }
        return res.json();
    })
    .then(data => {
            setData(data["data"])
        setLoadingstat(false)
        setError(null)
    })
    .catch(err => {
        setLoadingstat(false)
        setError(err.message)
    })
   },[url])


    return (
       {data,loadingstat,error}
    )
}

export default FetchData
