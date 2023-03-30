import React from 'react'

function CommonImage({url}) {
    console.log('url', url)
  return (
    <>
      {
        url?.map((data)=>{
            return (
                <>
                <img src={data} alt="image" />
                </>
            )
        })
      }
    </>
  )
}

export default CommonImage
