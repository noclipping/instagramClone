import { useState, useEffect, useContext } from "react";
import FirebaseContext from '../context/firebase'
export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
    const { firebase } = useContext(FirebaseContext)
    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged((authUser)=>{
            if(authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser)
            } else {
                localStorage.removeItem('authUser');
                setUser(null)
            }
        })
        return ()=> listener();
    },[firebase])
    return {user}
}

// so the 2nd value ( ARRAY ) passed into useEffect only updates when that particular state is changed, or i guess context is this
// example. ig the idea there is u can also pass props thru. but anyways, that's why an empy array is only running when
// the component mounts. the return function is the componentcleanup, running after an unmount.