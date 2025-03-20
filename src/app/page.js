import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
 import Feed from "@/components/Feeds/Feed";
 import fetchdata from "@/utilities/fetchdata";
 import Searchbar from "@/components/searchbar/Searchbar";

export default function Home() {
  return (
    <div className="flex">
    <Sidebar/>
    <Feed/>
    <Searchbar/>
    
    </div>
);

}
