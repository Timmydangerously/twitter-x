"use client"

import React from 'react'
import styles from "./searchBar.module.css"
import { fetchdata } from '@/utilities/fetchdata'
import { useState } from 'react'
import { fetchwork } from '@/utilities/fetchdata'


const SearchBar = () => {

const [ userKeyword, setUserKeyword ] = useState('')     
const [result, setResult] = useState([])
const [work, setWork] = useState([])

const handleSearch = async (e) => {
   e.preventDefault();
   const data = await fetchdata(userKeyword)

  //  console.log(data)

   setResult(data.result.timeline.instructions); 
  }
  console.log(result) 



  const handleSearch2 = async (f) =>{
    f.preventDefault();

    const data = await fetchwork();
    setWork(data)
    console.log(work)
  }


  return (
    <div>   
    <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search post'
         value={userKeyword}     
            className='bg-transparent'
            onChange={(e) => setUserKeyword(e.target.value)}       
            />
    </form>

    
    {result.map((item, index) => (
        <div key={index}>
          {item.entries?.map((entry, entryIndex) => (
            <div key={entryIndex}>
              {entry.content?.items?.map((eachItem, itemIndex) => (
              <div>
                  <h1 key={itemIndex}>
                  {eachItem?.item?.itemContent?.user_results?.result?.legacy?.location || "No Location"}
                  {eachItem?.item?.itemContent?.user_results?.result?.legacy?.followers_count || "No follow"}
                </h1>
              </div>
              ))}
            </div>
          ))}
        </div>
      ))}   
      

      <button onClick={handleSearch2}>submit</button>

      {
        work.map((eachItem, index) => (
           <div>
            <h1>{eachItem.category}</h1>
            <h1>{eachItem.description}</h1>
            <img className='w-28 h-28' src={eachItem.image} alt="Image" />
           </div>
        ))
      }

    </div>
  )
}

export default SearchBar 



// QueenEsther@2025  

// result(object) - timeline(object) - instructions(array) - 0(object) - entries(array) - 0(object) - content(object) - items(array) - 0(object) - item(object) - itemContent(object) - user_result(object) - result(object) - legacy(object)

// location, profile_banner_url, followers_count, name, screen_name

