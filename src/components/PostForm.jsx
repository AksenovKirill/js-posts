import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const emptyPost = {
  title: '',
  body: '',
};

const PostForm = ({create}) => {
  const [post, setPost] = useState(emptyPost);

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost); //callback createPost
    setPost(emptyPost); // очистка инпутов
  };

  return (
    <form>
      {/* Управляемый компонент*/}
      <MyInput
        value={post.title}
        onChange={(event) => setPost({...post, title: event.target.value})} //двустороннее связывание
        type='text'
        placeholder='Название поста'
      />
      <MyInput
        value={post.body}
        onChange={(event) => setPost({...post, body: event.target.value})} //двустороннее связывание
        type='text'
        placeholder='Описание поста'
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
