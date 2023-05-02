import { gql } from "@apollo/client/core";

export const SINGLE_UPLOAD_MUTATION = gql`
mutation CreatePost($file: [Upload]!, $post: PostInput) {
    createPost(file: $file, post: $post) {
        images
        title
        text
    }
}
`;

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

export const GET_ONE_POST = gql`
query GetPost($getPostId: ID) {
    getPost(id: $getPostId) {
        id
        images
        text
        title
    }
}
`

export const DELETE_POST = gql`
mutation Mutation($deletePostId: ID) {
    deletePost(id: $deletePostId)
}
`

export const FILE_UPLOAD = gql`
mutation Mutation($file: Upload!) {
    fileUpload(file: $file) {
      Bucket
      ETag
      Key
      Location
      key
    }
  }
`

export const IMAGE_UPLOAD = gql`
mutation Mutation($file: Upload!) {
    uploadImage(file: $file) {
      filename
      id
      url
    }
  }
`