import StudentItem from './StudentItem';
import classes from './StudentList.module.css';
import { useState, useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"

function StudentList(props) {
  const globalCtx = useContext(GlobalContext)
  let theCount = globalCtx.theGlobalObject.count

  return (
    <div>
      <div className={classes.logo}>Students added this session ({theCount})</div>
      <ul className={classes.list}>
        {props.students.map((student) => (
          <StudentItem
            key={student.meetingId}
            id={student.meetingId}
            image={student.image}
            name={student.name}
            age={student.age}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
