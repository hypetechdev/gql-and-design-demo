import React from 'react'

interface Props {}

const Text: React.FC<Props> = (props) => {
    return <p className="flow-text">{props.children}</p>
}

export default Text
