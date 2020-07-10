import React from "react"
import JSONData from "../../content/My-JSON-Content.json"

export default function Home() {

  return <div>
    Hello World
 
    <h1>
    {JSONData.title}
    {JSONData.content.map((data, index) => {   //The same data is in another class as well, was just using it here to make it all available in one place
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
  </h1> </div>
  
}
