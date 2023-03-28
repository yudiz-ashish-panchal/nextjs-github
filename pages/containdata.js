import React from "react";


function Containdata({userData}) {
console.log('data', userData)

  return (
    <>
    {
      userData?.message
    }
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
