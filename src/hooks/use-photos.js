import {useState, useEffect, useContext} from "react";
import { getPhotos, getUserByUserId } from "../services/firebase";
import UserContext from "../context/user";

export default function usePhotos(){
    const [photos, setPhotos] = useState(null)

    const {
        user: { uid: userId = ''}
    } = useContext(UserContext)
    
    useEffect(() => {
        async function getTimelinePhotos(){
            // example: [2,1,5] <- 2 being raphael
            const [{following}] = await getUserByUserId(userId);
            let followedUserPhotos = [];

            // does the user actuall follow people?
            if(following.length > 0){
                followedUserPhotos = await getPhotos(userId, following)
            }
            
        followedUserPhotos.sort((a,b)=>b.dateCreated-a.dateCreated);
        setPhotos(followedUserPhotos)
        }
        getTimelinePhotos();
    }, [userId])

    return { photos };
}