import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
  const {title, body} = props.post;
  const router = useNavigate();

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.post.id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>
          {' '}
          {/* //получаем из props callback REMOVE */}
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
