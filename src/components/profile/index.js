import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header'
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';



export default function Profile({username}){
    const reducer= (state,newState) =>({...state,...newState});
    const initialState = {
        profile:{},
        photosCollection:{},
        followerCount:0
    }
    const [{profile, photosCollection, followerCount}, dispatch] = useReducer(reducer, initialState)
    
    useEffect(()=>{
        async function getProfileInfoAndPhotos(){
            const [{...user}] = await getUserByUsername(username)
            const photos = await getUserPhotosByUsername(username);
            // dispatch({profile: user, photosCollection:photos, followerCount:user.followers.length})
        }
        if(username){
            getProfileInfoAndPhotos();
        }
    },[username])

    return <><Header /></>
}

Profile.propTypes={
    username: PropTypes.string.isRequired
}