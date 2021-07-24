import { useEffect, useState } from "react";
import Gallery from "./Gallery"



function Images () {

let [tags, setTags] = useState("California")
let [filterImages, setFilterImages] = useState([]);


useEffect ( () => {
    tags === "California" ? setFilterImages(Gallery) : setFilterImages(Gallery.filter( (item) => {
        return item.tag === tags
    }))
}, [tags])



return (
    <div>
        <div className="tags">
            <TagComponent name = "California" handSetTage = {setTags} tagActive = {tags === "California" ? true : false}/>
            <TagComponent name = "Los Angeles" handSetTage = {setTags} tagActive = {tags === "Los Angeles" ? true : false}/>
            <TagComponent name = "San Francisco" handSetTage = {setTags} tagActive = {tags === "San Francisco" ? true : false}/>
            <TagComponent name = "San Diego" handSetTage = {setTags} tagActive = {tags === "San Diego" ? true : false}/>
        </div>
        <div className="container">
        {filterImages.filter((item) => {
          return (
              <div key={item.id} className="image-card">
                <a href={`/images${item.imageName}`}>
                    <img className='image' src={`/images/${item.imageName}`}/>
                </a>
              </div>
          )
        })}
        </div>


    </div>

)

}

const TagComponent = ({name, handSetTag, tagActive}) => {
    return <button className={`tag ${tagActive ? 'active' : false}`} onClick={() => handSetTag(name)}>{name.toUpperCase()}</button>
}



export default Images;
