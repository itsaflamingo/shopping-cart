import React, { useEffect, useState } from 'react'
import background from '../images/background.jpg'
import background2 from '../images/background2.jpg'
import background3 from '../images/background3.webp'
import background4 from '../images/background4.jpg'


export default function Carousel(props) {

    const backgrounds = [background, background2, background3, background4];
    const [index, setIndex] = useState(0)
    const {navToShop} = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            if(index === 3) setIndex(0)
            else setIndex(index + 1);
        }, 5000)

        return () => clearTimeout(timer);
    }, [index]);
    
    return(
        <div id='background' style={{
            backgroundImage: `url(${backgrounds[index]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div id='home-header'>
              <h2>Fake Shop</h2>
            </div>
            <button id='visit-shop' onClick={navToShop}>Shop</button>
          </div>
    )
}