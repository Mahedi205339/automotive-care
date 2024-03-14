import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      console.log(result.user.email);
      axios.patch(`/monthly-user-count/${result.user?.email}`)
        .then(res => res.data)
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      axios.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
        toast.success("Successfully logged in");
      });
    });
  };
  return (
    <div>
      <div>
        {/* <div className="divider"></div> */}
        <button
          onClick={handleGoogleSignIn}
          className="btn social-login border border-[#f65e3b] text-[#f65e3b] my-5 btn-outline w-96 hover:bg-black hover:text-[#f65e3b]  "
        >
          <FcGoogle className="text-3xl"></FcGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;