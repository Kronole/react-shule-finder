import React from 'react'
import loadingGif from "../images/gif/loading-leaf.gif";
export default function Loading() {
    return (
        <div className="loading">
            <h4>schools data loading...</h4>
            < img src={loadingGif} alt="loading arrow" />

        </div>
    )
}
