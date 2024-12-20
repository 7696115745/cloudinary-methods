 "use client"
 import { useEffect } from "react"
export default function page() {
 useEffect(()=>{
    getcloudnaryimages()
    },[])
 
    const cloudinaryApi=encodeURI(`${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`);
    const cloudinarySecret=encodeURI(`${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`);
    const cloudinaryId=encodeURI(`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`)
 
    const getcloudnaryimages= async()=>{
        try{
const response=await fetch(`https://${cloudinaryApi}}:${cloudinarySecret}@api.cloudinary.com/v1_1/${cloudinaryId}/resources/rahul`,{
    method:"GET",
    headers:{
        "Content-Type": "application/json",
        Authorization:"Basic"
    // `${(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY+":"+process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET+":"+process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME).toString()}`
    }
 })
 const data=response.json()
 console.log("response",data)
 

        }
        catch(error:any){
            console.log("error",error)
        }

    }
  
  return (
  <>
  <button onClick={getcloudnaryimages}>get data </button>
  
  </>
  )
}
 

 