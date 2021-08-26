import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
import Layout from '../components/Layouts';
import Banner from '../components/Banner';
// import styles from '../styles/Home.module.scss';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Home | Next.js">
      <div className={'container'}>
        <Banner />
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
