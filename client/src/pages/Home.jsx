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
      {/* <div>Home</div> */}

      <h1 className="block font-sans text-6xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3 text-center mx-auto">
        PlantPal
      </h1>
      <UserList users={users} />
    </>
  );
}

export default Home;
