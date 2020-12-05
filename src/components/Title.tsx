import React from 'react'

interface Props {
    text: string
}

const Title = (props: Props) => {
    return <h2>{props.text} 🚀</h2>
}

export default Title
