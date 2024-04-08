// Node Modules
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import { QUERY_USERS, QUERY_USER, QUERY_ME } from "../utils/queries";
// Components
import UserList from "../components/UserList";
import AddPlant from "./AddPlant";

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  // const { loading, data, error } = useQuery(QUERY_USER, {
  //   variables: { id },
  // });

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  //commented out user variable for now
  // const user = data?.me || data?.user || {};
  const user = data?.user || {};

  const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  // Might have this re-direct go to collection, may change log in redirecton the
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links to sign
        up or log in
      </h4>
    );
  }

  const renderUserList = () => {
    if (usersLoading) return null;
    // Only renders users who's profile we're not currently viewing
    const notMeUsers = users.filter((o) => o._id !== user._id);
    return <UserList users={notMeUsers} title="User List" />;
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <ul>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
      </ul>
    );
  };

  return (
    <div>
      <div>
        <h2>Viewing {id ? `${user.username}'s` : "your"} profile.</h2>
        {renderCurrentUserInfo()}
        {renderUserList()}
      </div>
    </div>
  );
};

export default Profile;
