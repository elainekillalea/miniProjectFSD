import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewStudentForm.module.css';

function NewStudentForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const ageInputRef = useRef();
  const gradeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredGrade = gradeInputRef.current.value;

    const meetupData = {
      meetingId: enteredName,
      name: enteredName,
      image: enteredImage,
      age: enteredAge,
      grade: enteredGrade,
    };

    props.onAddStudent(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Profile Pic</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='age'>Age</label>
          <input type='text' required id='age' ref={ageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='grade'>Grade</label>
          <textarea
            id='grade'
            required
            rows='5'
            ref={gradeInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Student</button>
        </div>
      </form>
    </Card>
  );
}

export default NewStudentForm;
