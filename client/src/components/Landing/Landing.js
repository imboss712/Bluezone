import React, { lazy, Suspense } from 'react';

import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import SuspenseLoading from '../../ui/Loading/SuspenseLoading';

import Banner from './Banner/Banner';
import Info from './Info/Info';
const HowTo = lazy(() => import('./HowTo/HowTo'));
const FAQs = lazy(() => import('./FAQs/FAQs'));
const Feedback = lazy(() => import('./Feedback/Feedback'));

const Landing = () => {
  return (
    <>
      <HelmetComponent
        title="Online Battlegrounds India Tournaments | Bluezone"
        description="Bluezone is an Online BGMI Tournament Platform where BGMI lovers can play tournaments daily and earn real money instantly."
        url="https://www.bluezone.fun"
        indexBehaviour="index, follow"
      />

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
