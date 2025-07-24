import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    function showTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    function showDate(){
        let day = padZero(time.getDate());
        let month = padZero(time.getMonth()+1);
        let year = time.getFullYear();

        return `${day}/${month}/${year}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{showTime()}</span>
            </div>
            <div className="date">
                <span>{showDate()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;