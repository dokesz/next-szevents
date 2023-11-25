"use client"
import Test from '@components/Test';
import Loading from './loading';
import { Suspense } from 'react';


const Home = async () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-2xl font-bold md:mt-4 mt-6 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>
      <Suspense fallback={<Loading />}>
        <Test />
      </Suspense>

    </section>
  );
};

export default Home;
