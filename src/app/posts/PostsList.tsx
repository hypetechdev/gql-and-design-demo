import { useQuery } from '@apollo/client'
import Card from 'components/Card'
import { Link, Subtitle } from 'components/ui'
import React from 'react'
import { POSTS_QUERY } from '../../lib/userQueries'
import PostsCard from './PostCard'

interface Props {}

const PostsList = (props: Props) => {
    const { data, loading, error, refetch } = useQuery(POSTS_QUERY)

    console.log(data)

    if (loading) {
        return <h2>Loading posts...</h2>
    }

    const { posts } = data

    return (
        <div>
            <Subtitle>THIS SUBTILE</Subtitle>
            <Link href="/page">Go to page</Link>
            <Card title="This is first card"></Card>
            {posts.map((post: any) => (
                <PostsCard post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostsList
