import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    console.log(showGptSearch);
    const handleGPTSearchClick = () => {
        // Toggle GPT search
        dispatch(toggleGptSearchView());
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //   const uid = user.uid;
                //   I can get a lot of cool things from USER object
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });
        // unsubscribe when Component unmounts
        return unsubscribe();
    }, []);

    // to use the photo URL

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch(() => {
        })
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        // <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between bg-black sm:bg-blue-900 md:bg-green-900 ">
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between">
            <img className="w-44 mx-auto md:mx-0" alt="logo" src={LOGO} />
            {user && (<div className="flex p-2 justify-between">
                {/* <img className="w-12 h-12" src="https://occ-0-6431-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7" alt="user-icon"/> */}
                <img className="w-12 h-12" src={user?.photoURL} alt="user-icon" />
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>)}
            (<div className="flex p-2">
                {showGptSearch && (<select className="m-2 p-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
                </select>)}
                    {showGptSearch}
                <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGPTSearchClick}>{ showGptSearch ? "Homepage" : "GPT Search"}</button>
                <img className="hidden md:block w-12 h-12" src={user?.photoURL} alt="user-icon" />
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>)
        </div>
    )
}
export default Header;