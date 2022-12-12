// Notes:
// The database data should be loaded in the root component:
// - see _app.js
// so it should be done in the <Layout> component
// However, we'd then have to pass the data as a property down through
// the component tree . . . more prop drilling!
// So this is a temporary hack . . . means you have to visit the home page 
// in order to get the database data.
// We will fix this and provide a proper solution when we use the Contat API.

import StudentList from '../components/meetups/StudentList'
import { useState, useEffect, useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    // const [students, setStudents] = useState(null);

    // useEffect(() => {
    //     getAllStudents()
    // }, []);

    // async function getAllStudents() {
    //     const response = await fetch('/api/get-students', {
    //         method: 'POST',
    //         body: JSON.stringify({students: 'all'}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     let data = await response.json();
    //     setStudents(data.students);
    // }

    // if (students == null) {
    //     return null
    // } else {
    // return <StudentList students={students} />
    // }

    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <StudentList students={globalCtx.theGlobalObject.students} />
    }
    return <div>Loading data from database, please wait . . . </div>

}

export default HomePage;