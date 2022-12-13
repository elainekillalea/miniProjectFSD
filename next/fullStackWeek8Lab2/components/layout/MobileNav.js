import classes from './MainNav.module.css'
import NavLinks from './NavLinks'

const MobileNav = () => {
    return ( 
        <nav className={classes.MobileNav}>
            <NavLinks />
        </nav>
    );
}

export default MobileNav;