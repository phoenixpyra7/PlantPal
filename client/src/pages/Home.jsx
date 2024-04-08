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
  
  // Moved the MyCollection component definition inside the Home component
  const MyCollection = () => {
   
    const containerStyle = {
      // position: 'relative',
      backgroundImage: `url('./src/images/background2.png')`,
      // backgroundSize: "cover", 
      // width: '100%',
      // height: '100%',
      // objectFit: 'contain',
      // opacity: '0.7',
      backgroundSize: "cover", 
      backgroundPosition: "center",
      minHeight: "100vh",
    };
  
    const h1Style = {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1', // To ensure the h1 appears above the image
      color: '#0a2a49', // Color of preference for title
      fontSize: '6rem', // Font size 
      fontWeight: 'bold', // Font weight
      fontFamily: 'sans-serif', // Font family
      textAlign: 'center', // Center the text
    };

    return (
      <div style={containerStyle}>
        <img
          src="./src/images/background2.png"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt="background image of a light green succulent"
        />
        <h1 style={h1Style}>
          PlantPal
        </h1>
      </div>
    );
  };

  // Render the MyCollection component
  return (
    <div>
      <MyCollection />
      {/* Render other components or content here */}
    </div>
  );
}

export default Home;