import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import "./load.css"
function Load() {
    return (
        <div className="loading">
           
            <div className="loadbar">
                <LinearProgress color="warning" variant="determinate" value={30} />
                <p className="text">1$ for a pictures - 1 billion pictures - 100% for NOOs</p>
            </div>
            
        </div>
    )
}

export default Load
