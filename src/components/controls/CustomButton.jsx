import React from 'react'

export const CustomButton = ({
    loading,
    onClick,
    text,
    style,
    display,
    justifyContent,
    margin,
    alignItems,
    className,
    disabled
}) => {
    return <button className="form-control btn-md btn-block mb-1 submit-button" disabled={disabled} onClick={onClick} style={style}>
        <div style={{
            display: 'inline-flex',
            justifyContent: "center",
            alignItems: "center",
            margin: -10
        }}>
            {
                loading &&
                <span className="spinner-border spinner-border-sm" style={{ marginRight: 5, color: '#fff' }} ></span>
            }
            <span>{text}</span>
        </div>
    </button>
}
