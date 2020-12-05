import React from 'react'

import Card from 'components/Card'
import Text from 'components/Text'

interface Props {
    post: { id: number; title: string; body: string }
}

const UserActions = () => (
    <div className="card-action">
        <a href="#">Favorite</a>
        <a href="#">Delete</a>
    </div>
)

const PostsCard: React.FC<Props> = ({ post }) => {
    return (
        <Card title={post.title} actionsComponent={<UserActions />} hoverable>
            <Text>{post.body}</Text>
        </Card>
    )
}

export default PostsCard
