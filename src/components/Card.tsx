import React from 'react'

interface Props {
    title: string
    actionsComponent?: React.ReactNode
    hoverable?: boolean
}

const Card: React.FC<Props> = ({
    title,
    actionsComponent,
    hoverable = false,
    children,
}) => {
    const style = hoverable ? ' hoverable' : ''
    return (
        <div className={`card blue-grey darken-1${style}`}>
            <div className="card-content white-text">
                {title ? <span className="card-title">{title}</span> : null}
                {children}
            </div>
            {actionsComponent}
        </div>
    )
}

export default Card
