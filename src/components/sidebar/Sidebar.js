import React from 'react'
import Image from 'next/image'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={`${styles.sidecontainer} pl-20 w-1/5 h-screen`}>
<svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
  <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%) "}}></path></g></svg>      
    
    <div className="flex gap-5 flex-col items-start justify-center space-y-1  text-white pt-10 text-2xl">
      <div className={`${styles.subContainer} flex`} >
        <Image src="/side_images/home.png" width={25} height={25} alt='home Image'style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1 className="pl-3">Home</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
        <Image src="/side_images/search.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>Explore</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
      <Image src="/side_images/notifications.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>Notifications</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
      <Image src="/side_images/mail.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>Messages</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
      <Image src="/side_images/grok.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>Grok</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
      <Image src="/side_images/community.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>Communities</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
      <Image src="/side_images/profile.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>Profile</h1>
        </div>

      <div className={`${styles.subContainer} flex gap-3`}>
      <Image src="/side_images/more.png" width={25} height={25} alt='home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
        <h1>More</h1>
        </div>

    </div>
    </div>
  )
}

export default Sidebar
