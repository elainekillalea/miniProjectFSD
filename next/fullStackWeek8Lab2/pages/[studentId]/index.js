import StudentDetail from '../../components/meetups/StudentDetail'
import { useRouter} from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.students.length; ii++) {
        let temp = globalCtx.theGlobalObject.students[ii]
        if (temp.meetingId.trim() == router.query.studentId.trim()) {
            returnVal = <StudentDetail image={temp.image} name={temp.name} age={temp.age} grade={temp.grade} />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}