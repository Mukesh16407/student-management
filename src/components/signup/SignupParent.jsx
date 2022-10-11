import {
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth  } from '../../firebase-auth/firebase';
import { SignupForm } from "./SignupForm";



export const SignupParent=()=>{

    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const googleSignup = async () =>{
        await signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            let { email } = user.reloadUserInfo
            if (email) {
                navigate("/dash_board")
            }
            // ...
          }).catch((error) => {
           console.log(error)
          });
    }
    let data = localStorage.getItem("token");
    data = JSON.parse(data);

    if (data) {
        return  navigate("/dash_board")
    }
   
    return (
        <>
            <SignupForm signupgoogle={googleSignup} />
        </>
    )
}