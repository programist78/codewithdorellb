import { gql } from "@apollo/client/core";

export const GET_POSTS = gql`
    query Query {
    getAllPosts {
        images
        title
        text
        id
    }
}
`;


export const DELETE_POST = gql`
mutation Mutation($deletePostId: ID) {
    deletePost(id: $deletePostId)
}
`

export const CREATE_POST = gql`
mutation CreatePost($post: PostInput) {
  createPost(post: $post) {
    id
    title
    sourceCode
    videoLink
  }
}
`