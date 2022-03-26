import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  const {title, body} = props.post;
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.post.id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className='post__btns'>
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
