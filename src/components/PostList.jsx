import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  if(!posts.length) { //*Условная отрисовка
    return (
      <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
    )
  }
  return (
    <div>
      <h1 style={{textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} /> //прокидываем вниз callback
      ))}
    </div>
  );
};

export default PostList;
