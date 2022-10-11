import {
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase-auth/firebase';
import { LoginForm } from "./LoginForm";

export const LoginParent=()=>{

    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = async () => {

        await signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            // console.log(user.reloadUserInfo)

            let { email } = user.reloadUserInfo;
            if (email) {
                navigate("/")
            }
        })
        .catch((error) => {
            console.log(error);
        });

    }
    let data = localStorage.getItem("token");
    data = JSON.parse(data);

    if (data) {
        return <Redirect to="/dash_board" push={true} />
    }
    return (
        <>
            <LoginForm logingoogle={googleLogin} />
        </>
    )

}