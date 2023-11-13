import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-2xl font-bold mt-4 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>

      <Feed />
    </section>
  );
};

export default Home;
