import { Component, useState, useMemo } from 'react';
import styles from '../../../styles/Posts.module.scss'
// import TabContext from '@mui/lab/TabContext';
// import TabPanel from '@mui/lab/TabPanel';
import PostsView from './PostsView';
import { GET_POSTS } from '../../../apollo/posts';
import { useQuery } from '@apollo/client';
// import backerror from '../../../public/backerror.webp'

export const Posts = () => {

    const [value, setValue] = useState('1');

    const { loading, error, data } = useQuery(GET_POSTS);
    // if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
    <>
        <div value={value} className={styles.superback}>
        <div value="1"> 
            <div className={styles.back}>
            {(loading ? [...Array(3)] :data.getAllPosts).map((obj, key) => 
             loading ? 
             (<PostsView     key={key} 
                 myKey={key} isLoading={true} />) :
            (
            <PostsView
                key={key} 
                myKey={key}
                id={obj.id}
                title={obj.title}
                text={obj.text}
                // image={obj.images ? obj.images[0] : ''}
                image={obj.images[0]}
                // backerror={backerror}
                createdAt={obj.createdAt}
            />
            ),
            )}
        </div>
        </div>
        </div>
        </>
    )
}