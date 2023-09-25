import React from "react";
import  s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post massage={"Hello"} age={"10yo"}/>
                <Post massage={"How are you?"} age={"10"}/>
                <Post massage={"Yes"} age={"20yo"}/>
            </div>
        </div>


    )
}