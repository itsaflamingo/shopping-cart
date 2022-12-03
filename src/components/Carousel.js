import background from '../images/background.jpg'
import Menu from './Menu'

export default function Carousel(props) {

    const {navToShop} = props;

    const backgroundStyle = () => {
        return {
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
        }
    }
    
    return(
        <div id='background' style={backgroundStyle()}>
            <div id='home-header'>
              <h2>Fake Shop</h2>
              <Menu />
            </div>
            <button id='visit-shop' onClick={navToShop}>Shop</button>
          </div>
    )
}