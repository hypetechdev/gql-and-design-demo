import React from 'react'
import './App.css'

// import * as userQueries from '../userQueries'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import PostsList from './posts/PostsList'
import Container from 'components/Container'
import Title from 'components/Title'
import Text from 'components/Text'

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
})

// Apollo GraphQL
// client
//     .query({
//         query: userQueries.POSTS_QUERY,
//     })
//     .then((result) => console.log(result))

function App() {
    return (
        <ApolloProvider client={client}>
            <Container>
                <div>
                    <Title text="Posts" />
                    <Text>Here all posts</Text>
                    <PostsList />
                </div>
            </Container>
        </ApolloProvider>
    )
}

export default App
