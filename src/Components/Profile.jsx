import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Components/context/AuthContext";
import { Button } from "react-bootstrap";
const Profile = () => {
  const { user, logoutUser } = UserAuth();
  const navigate = useNavigate();
  const logoutExistingUser = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div>
        <p>
          Welcome, <span className="text-xl">{user.displayName}</span>
        </p>
      </div>

      {/* --------Logout Button-------- */}
      <div className="my-4">
        <Button className="bg-danger" onClick={logoutExistingUser}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
