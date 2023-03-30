import React, { useEffect, useState } from 'react'
import Link from 'next/link'
function Repo({userName,url}) {
    const [repoUrl,setRepoUrl] = useState([])
    console.log('repoUrl', repoUrl)
    const  getUserRepo = async()=>{
           const userRepo = await fetch(`${url}`)
           const result =await userRepo.json()
           console.log('result', result)
           setRepoUrl(result)
    }

    useEffect(()=>{
        getUserRepo()
    },[])
  return (
    <>
        <div>
            {repoUrl?.map((repos)=>{
                return (
                    <>
                    <h4>{repos?.name}</h4>
                    <Link href={`${repos?.html_url}`}>{repos?.html_url}</Link>
                    </>

                )
            })}
        </div>
    </>
  )
}

export async function getStaticProps(context) {
    console.log('context', context)
    // const res = await fetch('')
    // const posts = await res.json()
  
    return {
      props: {
        
      },
    }
  }

export default Repo
