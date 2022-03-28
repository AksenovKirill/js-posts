import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import {useFetching} from '../hooks/useFetching';

const PostId = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
console.log('comments', comments)
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isCommentLoading, commentError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    },
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className='comments__wrapper'>
      <h1 className='comments__title'>
        Вы открыли страницу поста c ID = {params.id}!
      </h1>
      {isLoading || isCommentLoading ? (
        <Loader />
      ) : (
        <><div>
            <h2 className='comment__title'>
              {post.id}.{post.title}
            </h2>
          </div><div>
              {comments.map((comment, index) => (
                <div className='comment__item' key={comment.id}>
                  <h2 className='commnet__email'>
                    {index + 1}.{comment.email}
                  </h2>
                  <div className='comment'>{comment.body}</div>
                </div>
              ))}
            </div></>
      )}
    </div>
  );
};

export default PostId;
