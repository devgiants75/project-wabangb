/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import "../styles/ContrySelect.css";

interface ImageSliderProps {
  images: string[];
}

function ContrySelect({ images } : ImageSliderProps) {
  const [ imageIndex , setImageIndex ] = useState(0);

  useEffect(() => {
    const interId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interId)
  }, [images.length]);

  const renderImages = images.slice(imageIndex , imageIndex + 5);
  if (renderImages.length < 5) {
    renderImages.push(...images.slice(0, 5 - renderImages.length));
  }


  return (
    <div className="container-imgs">
        <div className="slide-img">
          {renderImages.map((image, index) => (
          <ul>
            <li>
              <div className="slide-con" key={image}>
                <a className="slide-a" href="/a">
                  <img src={image} alt={`Slide ${index}`} style={{width:'100%' , height:'auto'}} />
                </a>
                {/* <p >{image}</p> */}
              </div>
            </li>
          </ul>
          ))}
        </div>
      </div>
  );
}

export default ContrySelect;
