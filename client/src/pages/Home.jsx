import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import UserList from "../components/UserList";

function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }

  return (
    <>
        <h1 className="block font-sans text-6xl antialiased font-semibold leading-snug tracking-normal text-emerald-800 mb-3 text-center mx-auto">
          PlantPal
        </h1>
        <img src="./src/images/background2.png" bg-scroll style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: '0.7'}} alt="background image of a light green succulent" />
    </>
  );
}

export default Home;
