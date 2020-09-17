import React,{ useState } from 'react'

const Controls = (props) => {
    const [startDisabled, setStartDisabled] = useState(false)
    const [stopDisabled, setStopDisabled] = useState(true)
    const [resetDisabled, setResetDisabled] = useState(true)

    const countUp = () => {
        props.setTimer(prevTimer => prevTimer + 1)
        setTimeout(() => {
            countUp();
        },1000)
    }
    const handleStart = () => {
        setStartDisabled(true)
        setStopDisabled(false)
        setResetDisabled(true)
        countUp();
    }
    const handleStop = () => {
        setStartDisabled(false)
        setStopDisabled(true)
        setResetDisabled(false)
    }
    const handleReset = () => {
        setStartDisabled(false)
        setStopDisabled(true)
        setResetDisabled(true)
        props.setTimer("RESET!")
        console.log("RESET")
    }

    return (
        <div className="controls">
            <button 
                id="start" name="start" className="btn" 
                disabled={startDisabled} onClick={handleStart}
            >
                Start
            </button>
            <button
                id="stop" name="stop"  className="btn"
                disabled={stopDisabled} onClick={handleStop}
            >
                Stop
            </button>
            <button
                id="reset" name="reset" className="btn"
                disabled={resetDisabled} onClick={handleReset}
            >
                Reset
            </button>
        </div>
    )
}

export default Controls
