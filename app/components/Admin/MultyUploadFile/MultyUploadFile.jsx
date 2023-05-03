import { useApolloClient } from "@apollo/client/react/hooks/useApolloClient.js";
import { useMutation } from "@apollo/client/react/hooks/useMutation.js";
import { createElement as h, useState, useContext } from "react";
import {CREATE_POST} from '../../../apollo/posts'
import { AuthContext } from '../../../hooks/AuthContext';
import styles from '../../Login/Login.module.scss'
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import Loader from '../../Loader'
export default function MultyUploadFile() {
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState('')
  const router = useRouter();
  const [sourceCode, setSourceCode] = useState('')
  const [videoLink, setVideoLink] = useState('')
  
  const [uploadFileMutation, {loading: createLoading, error}] = useMutation(CREATE_POST, {
    variables: {title, sourceCode, videoLink}
  });
  const apolloClient = useApolloClient();
  const { auth, loading } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!loading && !auth) {
  //     router.push('/');
  //   }
  // }, [loading]);

  function Send() {
    uploadFileMutation()
  }

  if (error) return alert("Something went wrong")
  if (loading) return <Loader />

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
      <p>Explained video (link)</p>
      <input value={videoLink} onChange={(e) => setVideoLink(e.target.value)} className={styles.text}/>
      </div>
      <div>
      <p>Source code (link)</p>
      <input value={sourceCode} onChange={(e) => setSourceCode(e.target.value)} className={styles.text}/>
      </div>
      </div>
      <button onClick={() => Send()}>Send</button>
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
