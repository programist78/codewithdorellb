import styles from './PostInfo.module.scss'

const PostInfo = ({ post }) => {
    const {title, text, images} = post || {}
    if (!post) {
        return <h1>Doesn't found</h1>
    }
    return (
        <>
        <div className={styles.back}>
            <strong>{title}</strong>
            <strong>{text}</strong>
        </div>
        </>
    )
} 

export default PostInfo