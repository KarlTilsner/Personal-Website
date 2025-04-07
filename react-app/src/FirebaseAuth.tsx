import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AuthenticatePopup() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;

            console.log("Token:", token);
            console.log("User:", user);

            const nav = useNavigate();
            nav("/AdminPanel");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.error("Error Code:", errorCode);
            console.error("Error Message:", errorMessage);
            console.error("Email:", email);
            console.error("Credential:", credential);
        });
}

function Authenticate() {
    return <button onClick={AuthenticatePopup}>Sign In</button>;
}

export default Authenticate;
