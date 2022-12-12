// our-dimain.com/new-meetup
import NewStudentForm from '../../components/meetups/NewStudentForm'
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function NewStudentPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addStudentHandler(enteredStudentData)  {
        await globalCtx.updateGlobals({cmd: 'addStudent', newVal: enteredStudentData})
        globalCtx.updateGlobals({cmd: 'incMeetupCount'})
        router.push('/');
    }

    return <NewStudentForm onAddStudent={addStudentHandler} />
}

export default NewStudentPage