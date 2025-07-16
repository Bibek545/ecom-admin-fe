// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useEffect } from "react";
// import { toastSuccess, toastError } from "../../helpers/toastHelper";
// import { activateUserApi } from "../../helpers/authApi";

import { Spinner } from "react-bootstrap";
import React, { useState} from "react";

const ActivateUserPage = () => {
  // const [searchParams] = useSearchParams();
  // const sessionId = searchParams.get("sessionId");
  // const token = searchParams.get("t");

  // const navigate = useNavigate; //used to redirect

// useEffect(()=> {
//     const verifyUser = async () => {
//       try {
//         const res = await activateUserApi({ sessionId, token});

//         if (res?.data.status === "successs") {
//             toastSuccess(res.data.message);


//             setTimeout(()=> {
//                 navigate("/login");
//             }, 2000);
//         } else {
//             toastError(res?.data?.message || "verification failed");
//         }
//       } catch (error) {
//         toastError(error?.response?.data?.message || "something went wrong");
//       }
//     };

//     if(sessionId && token) {
//         verifyUser();
//     }

// } , [sessionId, token, navigate]);
  const [isPending, setIsPending] = useState(true);

return (
   <div className="py-5">
   {isPending && (
    <div className="m-auto text-center" style={{width:"450px"}}>
      <div  className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
         </div>
         <div>Verifying your account...</div>
      </div>
    )
   }
   </div> 
);
};

export default ActivateUserPage;