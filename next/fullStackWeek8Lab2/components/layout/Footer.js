import classes from './Footer.module.css'
import Link from 'next/link'

function Footer() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>MiniProj</div>
      {/* <nav>
        <ul>
          <li>
            <Link href='/'>List</Link>
          </li>
          <li>
            <Link href='/new-student'>New</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Footer
