import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { toastSuccess, toastError } from "../../helpers/toastHelper";
import { activateUserApi } from "../../helpers/authApi";



const ActivateUserPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const token = searchParams.get("t");

  const navigate = useNavigate; //used to redirect

useEffect(()=> {
    const verifyUser = async () => {
      try {
        const res = await activateUserApi({ sessionId, token});

        if (res?.data.status === "successs") {
            toastSuccess(res.data.message);


            setTimeout(()=> {
                navigate("/login");
            }, 2000);
        } else {
            toastError(res?.data?.message || "verification failed");
        }
      } catch (error) {
        toastError(error?.response?.data?.message || "something went wrong");
      }
    };

    if(sessionId && token) {
        verifyUser();
    }

} , [sessionId, token, navigate]);
 
return (
    <div className="d-flex justify-content-center mt-5">
        <h4>Verifying your account...</h4>
    </div>
);
};

export default ActivateUserPage;