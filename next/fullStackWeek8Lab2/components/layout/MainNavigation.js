import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import HamMenuFAB from "../generic/HamMenuFAB"
import Button from "../generic/Button"
import { useContext, useState } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  let theCount = globalCtx.theGlobalObject.count
  const router = useRouter()

  function toggleMenuGC() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }
 
 const contents = [
  {title: 'Student 1', webAddress: '/'}, 
  {title: 'Calendar', webAddress: '/calendar-page'}, 
  {title: 'Student 3', webAddress: '/'}, 
  {title: 'Student 4', webAddress: '/'}, 
  {title: 'Student 5', webAddress: '/'} 
 ]

  return (
    <header className={classes.header}>
      <HamMenuContent contents={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuGC()} />
      <HamMenuFAB toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.logo}>MiniProj</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>List</Link>
          </li>
          <li>
            <Link href='/new-student'>New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
