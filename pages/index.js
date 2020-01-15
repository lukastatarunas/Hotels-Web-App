import Link from 'next/link';
import { IndexContainer, Nav, Anchor, H1, Button } from '../styles/styles';

const Index = () => (
    <IndexContainer>
        <Nav>
            <Link href='/'>
                <Anchor>Home</Anchor>
            </Link>
            <Link href='/hotels'>
                <Anchor>Hotels</Anchor>
            </Link>
        </Nav>
        <H1>The World's Best Hotels</H1>
        <Link href='/hotels'>
            <Button>See Hotels!</Button>
        </Link>
    </IndexContainer>
);

export default Index;