/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import "../styles/ContrySelect.css";

interface Image {
  name: string;
  src: string;
}
interface ContrySelectProps {
  images: Image[];
}

const ContrySelect: React.FC<ContrySelectProps> = ({ images }) => {
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
          <ul>
          {renderImages.map((image) => (
            <li>
              <div className="slide-con"  key={image.name}>
                <a className="slide" href="/a">
                  <img src={image.src} alt={image.name} className="image" style={{width:'100%' , height:'auto'}} />
                </a>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
  );
}

export default ContrySelect;
