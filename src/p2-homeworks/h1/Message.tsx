import React from 'react'
import style from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessagePropsType) {
    return (
        <div className={style.message}>
            <div className={style.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={style.messageConteiner}>
                <div>{props.name}</div>
                <div className={style.messageValue}>
                    <div>{props.message}</div>
                    <div>{props.time}</div>
                </div>
            </div>


        </div>
    )
}

export default Message
