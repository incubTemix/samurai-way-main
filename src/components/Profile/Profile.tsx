import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src={"https://w.forfun.com/fetch/00/00dc65cb928157c9552569c7e959d40c.jpeg?w=1470&r=0.5625"}/>
        </div>
        <div>
            ava+ description
        </div>
        <MyPosts/>
    </div>
}

