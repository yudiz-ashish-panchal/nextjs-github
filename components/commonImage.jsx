import React from 'react'

function CommonImage({url}) {
    console.log('url', url)
  return (
    <>
      {
        url?.map((data,index)=>{
            return (
                <>
                <img src={data} alt={index} />
                </>
            )
        })
      }
    </>
  )
}

export default CommonImage
