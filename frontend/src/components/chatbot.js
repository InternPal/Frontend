import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import {Launcher} from 'react-chat-window';


const Chatbot = ({name, job})=>{

    useEffect(()=>{

        const reqURL = "http://localhost:5000/set-and-train-model";

        axios.post(reqURL, {
            company : job.name
        })
        .then((_)=>{
        })
        .catch((err)=>{
            alert(err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const sendQueries = (msg)=>{
        setMessages(prev=>[...prev, msg]);
        axios.post("http://localhost:5000/ask-question", {
            question : msg.data.text
        })
        .then((res)=>{
            setMessages(prev=>[...prev , {
                author: 'them',
                type: 'text',
                data: {
                  text: res.data
                }
            }])
        })
        .catch((err)=>{
            alert(err);
        })
    }

    const [isOpen, toggle] = useState(false);
    const [opened, setOpened] = useState(false);
    

    const [messages, setMessages] = useState([
        {
            author: 'them',
            type: 'text',
            data: {
              text: 'Hello ' + name + " !"
            }
          },
        {
            author: 'them',
            type: 'text',
            data: {
              text: 'My name is Interno and you can ask me any query you have about '+ (job.jobType === "Internship" ? "Internship" : "Full Time Job") + " at " + job.name
            }
          }
    ]);

    return <div><Launcher
        agentProfile={{
          teamName: 'Interno',
          imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/7QB0UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAFgcAlAADFRhbmlhIEJvbmRhchwCeAAlQ2hhdCBib3QgaWNvbiBzaWduIG9uIGJsdWUgYmFja2dyb3VuZBwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3Rv/+EAR0V4aWYAAElJKgAIAAAAAQAOAQIAJQAAABoAAAAAAAAAQ2hhdCBib3QgaWNvbiBzaWduIG9uIGJsdWUgYmFja2dyb3VuZP/hBUlodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTAxMDAwMTg4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",
        }}
        onMessageWasSent={sendQueries}
        messageList={messages}
        showEmoji
        newMessagesCount = {opened ? 0 : 2}
        isOpen = {isOpen}
        handleClick = {()=>{
            setOpened(true);
            toggle(prev=>!prev)
        }}
      /></div>
}

const mapStateToProps = (state)=>{
    return {
        name : state.user.name
    };
};

export default connect(mapStateToProps)(Chatbot);
