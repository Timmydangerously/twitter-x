"use client"

import React from 'react'
// import styles from "./searchBar.module.css"
import { fetchdata } from '@/utilities/fetchdata'
import { useState } from 'react'
import { fetchwork } from '@/utilities/fetchdata'
import Image from 'next/image'
import { SearchContext } from '@/context/SearchContext'
import { useContext } from 'react'
const SearchBar = () => { 
  const { name, result, setResult } = useContext(SearchContext)   
  
  const [ userKeyword, setUserKeyword ] = useState('')     
  //const [result, setResult] = useState([])  
  const [ loading, setLoading ] = useState(false)
  
  const handleSearch = async (e) => {      
     e.preventDefault(); // prevent the default of events
     const data = await fetchdata(userKeyword)   
     setLoading(true)
  
    //  console.log(data)
  
     setResult(data.result.timeline.instructions);  
     setLoading(false)    
    }
    console.log(result) 
  
  
    return (
      <div> 
        { name }  
      <form onSubmit={handleSearch}> 
          <input type="text" placeholder='Search post'  
           value={userKeyword}     
              className='bg-transparent'
              onChange={(e) => setUserKeyword(e.target.value)}       
              />
      </form>
        
  
      
      
      </div>
    )
  }
  
  export default SearchBar 
  
  
  
  // QueenEsther@2025  
  
  // result(object) - timeline(object) - instructions(array) - 0(object) - entries(array) - 0(object) - content(object) - items(array) - 0(object) - item(object) - itemContent(object) - user_result(object) - result(object) - legacy(object)
  
  // location, profile_banner_url, followers_count, name, screen_name