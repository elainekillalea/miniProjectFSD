import classes from './MainNav.module.css'
import HamMenu from "../generic/HamMenu"
import { useContext, useState } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import MobileNav from './MobileNav'

function MainNav() {
  const globalCtx = useContext(GlobalContext)
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
    <div className={classes.MainNav}>
      <HamMenuContent contents={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuGC()} />
      <div className={classes.logo}>MiniProj</div>
      <Navigation />
      <MobileNav />
    </div>
  );
}

export default MainNav
