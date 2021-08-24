import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import Banner from './Banner/Banner';
import Info from './Info/Info';

import SuspenseLoading from '../Loading/SuspenseLoading';

const HowTo = lazy(() => import('./HowTo/HowTo'));
const FAQs = lazy(() => import('./FAQs/FAQs'));
const Feedback = lazy(() => import('./Feedback/Feedback'));

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Online Battlegrounds India Tournaments | Bluezone</title>
        <meta
          name="description"
          content="Bluezone is an Online BGMI Tournament Platform where BGMI lovers can play tournaments daily and earn real money instantly."
        />
        <link rel="canonical" href="https://www.bluezone.fun" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Battlegrounds India Tournaments | Bluezone"
        />
        <meta
          property="og:description"
          content="Bluezone is an Online BGMI Tournament Platform where BGMI lovers can play tournaments daily and earn real money instantly."
        />
        <meta property="og:url" content="https://www.bluezone.fun" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Bluezone is an Online BGMI Tournament Platform where BGMI lovers can play tournaments daily and earn real money instantly."
        />
        <meta
          name="twitter:title"
          content="Online Battlegrounds India Tournaments | Bluezone"
        />
      </Helmet>

      <Banner />
      <Info />
      <Suspense fallback={<SuspenseLoading />}>
        <HowTo />
        <FAQs />
        <Feedback />
      </Suspense>
    </>
  );
};

export default Landing;
