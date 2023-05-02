import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Postsview.module.scss'
// import { PostSkeleton } from './Skeleton';
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Loading from '../../Loading';
import { PostSkeleton } from './Skeleton';
const Post = ({
  id,
  title,
  text,
  image,
  isLoading,
  createdAt,
  backerror
}) => {
  const [hasError, setHasError] = useState(false);

  function handleImageError() {
    setHasError(true);
  }
  const { ref, inView } = useInView({
    treshold: 0.5,
    triggerOnce:true
  })

  const postClasses = [styles.back];
  if (title?.length < 10) {
    postClasses.push(styles.evenPost);
  }


  return (
    <div ref={ref}>
            {inView ?
      (
        <>
        <Link prefetch={false} href={`/our-works/${id}`}>
    <div className={postClasses.join(' ')} key={id} >
    {hasError ? (
        <img
        className={styles.image}
          // src={backerror}
          alt={title}
        />
      ) : (
        <img
        className={styles.image}
          src={image}
          alt={title}
          onError={handleImageError}
        />
      )}
          <p className={styles.title}>
            {title}
          </p>
    </div>
    </Link>
    </>)
     :
     (<PostSkeleton />)
     }
    </div>
  );
};

export default React.memo(Post)