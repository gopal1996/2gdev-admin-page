import React from 'react'

export const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn--primary">{children}</button>
    )
}

export const DangerButton = ({children}) => {
    return (
        <button className="btn btn--danger">{children}</button>
    )
}
