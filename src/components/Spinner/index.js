import React from 'react'

import './Spinner.scss'

const styles = {
    content : {
        display : 'flex',
        width : "100%",
        justifyContent: 'center',
        padding: 20

    }
}

const Spinner = () => (
    <div style={styles.content}>
        <div className="mi-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Spinner