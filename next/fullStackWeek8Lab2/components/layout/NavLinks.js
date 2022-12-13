import Link from 'next/link'

const NavLinks = () => {
    return (
        <ul>
            <li>
                <Link href='/'>List</Link>
            </li>
            <li>
                <Link href='/new-student'>New</Link>
            </li>
        </ul>
    );
}

export default NavLinks;