import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAYzkfuZnFd93MtfY_x4uZkGGiOsnQuH2k",
    authDomain: "auth-development-31006.firebaseapp.com",
    projectId: "auth-development-31006",
    storageBucket: "auth-development-31006.appspot.com",
    messagingSenderId: "347803893838",
    appId: "1:347803893838:web:49203df40000f6d8c3031f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;