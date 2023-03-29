import React, { useEffect, useState } from "react";
import Layout from "../components/layout";


function Containdata({userData}) {
  console.log('userData', userData)
 
  return (
    <>
      <Layout>
    <div>
      {userData?.message ? userData?.message:""}
      {userData?.public_repos}
    </div>
      </Layout>
    </>
  );
}


export async function getServerSideProps({query}) {
  console.log('query', query)
  const data = query.data;
  console.log('params', data)
  const res = await fetch(`https://api.github.com/users/${data}`);
  const userData = await res.json();
  
  return {
    props: {
      userData,
    },
  };
}
export default Containdata;
