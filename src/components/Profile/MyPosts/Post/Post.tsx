import React from "react";
import  s from './Post.module.css'


 export type MessagePropsType =  {
    massage:string
     age:string
}

export const Post = (props:MessagePropsType) => {


    return (
        <div className={s.item}>
            <img src={"https://w.forfun.com/fetch/00/00dc65cb928157c9552569c7e959d40c.jpeg?w=1470&r=0.5625"}/>
            <div>
                <div> {props.massage}
                    {props.age}
                </div>

                <span>Like</span>
            </div>
            <div>
                <span>Deslike</span>
            </div>
        </div>

    )
}