import { Container, Cart } from './styles';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md'
import logo from '../../assets/images/logo.svg'

export default function Header() {
    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt='NetShoes'/> 
            </Link>

            <Cart to='/cart'>
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>

                <MdShoppingBasket size={36} color='#fff' />
            </Cart>
        </Container>
    );
}