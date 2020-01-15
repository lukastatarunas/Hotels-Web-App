import Link from 'next/link';
import { Nav, Anchor } from '../styles/styles';

const Navigation = () => {
    return (
        <Nav>
            <Link href='/hotels'>
                <Anchor>Hotels</Anchor>
            </Link>
        </Nav>
    );
}

export default Navigation;