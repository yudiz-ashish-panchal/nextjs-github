import React from "react";
import Layout from "../components/layout";
import styles from "../styles/ContainData.module.scss";
import Link from "next/link";
import Repo from "./repo";
function Containdata({ userData }) {
  return (
    <>
        <Layout>
          <div className={styles.containdata}>
            <div className={styles.containdata_image}>
              <img
                src={userData?.avatar_url}
                alt="userImage"
                width={300}
                height={300}
              />
              <h3>UserName: {userData?.login}</h3>
              <h4>Public Repo : {userData?.public_repos}</h4>
              <Link href="/emoji" className={styles.containdata_link}>
                {" "}
                Get GitHub Emoji
              </Link>
            </div>
            <div className={styles.containdata_repos}>
              <Repo userName={userData?.login} url={userData?.repos_url} />
            </div>
          </div>
        </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  console.log("query", query);
  const data = query.data;
  console.log("params", data);
  const res = await fetch(`https://api.github.com/users/${data}`);
  const userData = await res.json();

  return {
    props: {
      userData,
    },
  };
}
export default Containdata;
