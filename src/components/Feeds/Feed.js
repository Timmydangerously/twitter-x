"use client"

import React from 'react'
import styles from "./Feeds.module.css"
import { useState } from 'react'
import Tweet from '../tweet/Tweet'


const Feed = () => {
  const [Active, setActive ] = useState("For You")
  const handleActive =(tab) => {setActive(tab)}
  return (
    <div className={`${styles.Feedcontainer}`}>
      <div className={`${styles.Feedheader}`}>
        <a href="#" onClick={(e) => {e.preventDefault(); handleActive("For You")}} className={`${Active === "For You" ? styles.Active : ""}`}>For You</a>
        <a href="#" onClick={(e) => {e.preventDefault(); handleActive("following")}}  className={`${Active === "following" ? styles.Active : ""}`}>following</a>
      </div>

      <div className={`${styles.FeedContainer-2} flex flex-col gap-5`}>
        <div className='flex gap-3 items-center ml-3'>
          <img src="/Feed_images/female.png" alt="profile-icon" />
          <input type="text" className={`${styles.search}`} placeholder='What is Happening?!' />
        </div>
        <div className={`${styles.logoContainer}`}>
          <div className={`${styles.logos}`}>
            <img src="/Feed_images/image.png" alt="media" />
            <img src="/Feed_images/gif.png" alt="gif" />
            <img src="/Feed_images/grok.png" alt="grok" />
            <img src="/Feed_images/poll.png" alt="poll" />
            <img src="/Feed_images/emoji.png" alt="emoji" />
            <img src="/Feed_images/schedule.png" alt="schedule" />
            <img src="/Feed_images/location.png" alt="location" />
          </div>

        </div>
      </div>
      <Tweet/>
    </div>
  )
}

export default Feed
