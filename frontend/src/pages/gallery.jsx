import "./Gallery.css";
import { useState } from "react";

export default function Gallery(){

  const images = [
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a",
    "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377",
    "https://images.unsplash.com/photo-1471295253337-3ceaaedca402"
  ];

  const [selected, setSelected] = useState(null);

  return(
    <div className="gallery-page">

      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">

        {images.map((img,index)=>(
          <div 
            className="gallery-card"
            key={index}
            onClick={()=>setSelected(img)}
          >
            <img src={img} alt="gallery"/>
          </div>
        ))}

      </div>


      {/* FULL SCREEN VIEW */}
      {selected && (
        <div 
          className="gallery-modal"
          onClick={()=>setSelected(null)}
        >
          <img src={selected} alt="preview"/>
        </div>
      )}

    </div>
  );
}