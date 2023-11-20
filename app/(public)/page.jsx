// "use client";

import Feed from '@components/Feed';
import { revalidatePath } from 'next/cache'
import useSWR from 'swr';

async function getEvents() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data } = useSWR('https://next-szevents.vercel.app/api/szevent', fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  })

  return data;
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
