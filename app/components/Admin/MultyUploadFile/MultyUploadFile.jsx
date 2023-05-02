import { gql } from "@apollo/client/core";
import { useApolloClient } from "@apollo/client/react/hooks/useApolloClient.js";
import { useMutation } from "@apollo/client/react/hooks/useMutation.js";
import { createElement as h, useState, useContext } from "react";
import {SINGLE_UPLOAD_MUTATION} from '../../../apollo/posts'
import { AuthContext } from '../../../hooks/AuthContext';
import styles from '../../Login/Login.module.scss'
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import {useEffect} from "react"

export default function MultyUploadFile() {
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState('')
  const router = useRouter();
  const [text, setText] = useState('')
  
  const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION);
  const apolloClient = useApolloClient();
  const { auth, loading } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!loading && !auth) {
  //     router.push('/');
  //   }
  // }, [loading]);

  
  function onChangeCP({ target: { validity, files } }) {
    if (validity.valid && files && files[0])
    console.log(files)
      uploadFileMutation({ variables: { file: files, post:{title: title, text: text} } }).then(() => {
        apolloClient.resetStore();
      });
  }

  return(
    
    <div className={styles.back}>
      {auth 
      ?
      <div className={styles.back}>
      <div className={styles.form}>
        <p className={styles.title}>Create post</p>
        <div className={styles.part2}> 
        <div>
      <p>Title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className={styles.title}/>
      </div>
      <div>
      <p>Text</p>
      <input value={text} onChange={(e) => setText(e.target.value)} className={styles.text}/>
      </div>
      <div>
      <p>Images</p>
      <input type="file" required multiple onChange={onChangeCP} className={styles.button} style={{height: "5vw", marginBottom: "2vw"}}/>
      </div>
      </div>
      </div>
      </div>
      :
      <h1>access denied</h1>
      }
     
    </div>
  ) 
//   (
//     <div>
//     <input value={title} onChange={(e) => setTitle(e.target.value)}/>
//     <input value={text} onChange={(e) => setText(e.target.value)}/>
//     <input type="file" required multiple onChange={onChangeCP}/>
//     </div>
//     );

}
