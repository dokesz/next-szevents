import Feed from '@components/Feed';
import Event from '@models/event';
import { connectToDatabase } from '@utils/database';

async function getEvents() {
  await connectToDatabase();
  const events = await Event.find({})
    .populate("creator", "-email")
  return JSON.parse(JSON.stringify(events));
}

const Home = async () => {
  const events = await getEvents();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-2xl font-bold md:mt-4 mt-6 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>

      {events ? (
        <Feed events={events} />
      ) : (
        <p className="text-lg">Nincs megjeleníthető esemény.</p>
      )}
    </section>
  );
};

export default Home;
