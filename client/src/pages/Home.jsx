import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }

  const Home = () => {
    const containerStyle = {
      backgroundImage: `url('/images/background2.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    };

    const h1Style = {
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "1", // To ensure the h1 appears above the image
      color: "#65075a", // Color of preference for title
      fontSize: "6rem", // Font size
      fontWeight: "bold", // Font weight
      fontFamily: "sans-serif", // Font family
      textAlign: "center", // Center the text
    };

    return (
      <div style={containerStyle}>
        <h1 style={h1Style}>PlantPal</h1>
      </div>
    );
  };

  return (
    <div>
      <Home />
      {/* Render other components or content here */}
    </div>
  );
}

export default Home;
