import classes from './StudentDetail.module.css'

function StudentDetail(props) {

    let widthOld = 10;
    async function move() {
        let elem = document.getElementById("myBar");
        let widthNew = widthOld;
        let id = setInterval(frame, 10);
        let widthInc = 10;
        widthOld = widthNew + widthInc;
        function frame() {
            if (widthNew >= widthOld || widthOld > 100) {
                clearInterval(id);
            } 
            else {
                widthNew++;
                elem.style.width = widthNew + "%";
                elem.innerHTML = widthNew  + "%";
            }
        }
    }


    return (
        <section className={classes.detail}>
            <div className={classes.detail}>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <h1>{props.name}</h1>
                <address>{props.age}</address>
                <p>{props.grade}</p>
            </div>
            <div className={classes.actions}>
                <h2>Grade Progress</h2>
                <div className={classes.content}>
                    <div className={classes.myProgress}>
                    <div id="myBar" className={classes.myBar}>10%</div>
                </div>
                <button onClick={move}>Add</button>
            </div> 
        </div>
        </section>
    )
}

export default StudentDetail