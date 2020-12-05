import React from 'react'

interface Props {}

const Container: React.FC<Props> = (props) => {
    return <div className="container">{props.children}</div>
}

export default Container
