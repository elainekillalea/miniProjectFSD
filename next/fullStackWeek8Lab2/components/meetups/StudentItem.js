import Card from '../ui/Card';
import classes from './StudentItem.module.css';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import GlobalContext from "../../pages/store/globalContext"

function StudentItem(props) {
  const router = useRouter()
  const globalCtx = useContext(GlobalContext)

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  async function deleteHandler()  {
    await globalCtx.updateGlobals({cmd: 'deleteStudent', newVal: props.meetingID})
    globalCtx.updateGlobals({cmd: 'incMeetupCount'})
    router.push('/');
}

  return (
    <li className={classes.item}>
      <Card> 
        <div className={classes.flexcontent}>
          {/* <div className={classes.image}>
            <img src={props.image} alt={props.name} />
          </div> */}
          <div className={classes.content}>
            <h3>{props.name}</h3>
            <div></div>
            <h3>{props.age}</h3>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default StudentItem;
