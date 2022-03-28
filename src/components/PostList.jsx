import React from 'react';
import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const PostList = ({posts, title, remove, postError}) => {

  if (!posts.length) {
    //*Условная отрисовка
    return <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          paddingTop: '15px',
          paddingBottom: '15px',
        }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
