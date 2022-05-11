// import TimeContext from "./TimeContext";

function Setting() {

    return (
        <div>
            <h2>Settings</h2>
        
            <div className="setTime">
                <label>Total Time Working :</label>
                <input type='number' min='1' max='120' placeholder="30" name='work'/>
                <br></br>
                <label>Total Break Time:</label>
                <input type='number' min='1' max='120' placeholder="10" name='break'/>
            </div>
        
        </div>
    );
}

export default Setting;