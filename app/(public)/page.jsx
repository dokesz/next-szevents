// "use client";

import Feed from '@components/Feed';
import { revalidatePath } from 'next/cache'

async function getEvents() {
  const revalidate = revalidatePath('/');
  const res = await fetch('https://next-szevents.vercel.app/api/szevent', {
    method: 'GET', next: {
      revalidate: revalidate,
    }
  });

  return await res.json();
}

const Home = async () => {

  const events = await getEvents();
  console.log(events);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-2xl font-bold md:mt-4 mt-6 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>

      <Feed events={events} />
    </section>
  );
};

export default Home;
