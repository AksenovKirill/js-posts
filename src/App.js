import React, {useState, useMemo} from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';

const dataPosts = [
  {id: 1, title: 'yy', body: 'khj'},
  {id: 2, title: 'JavaScript 2', body: 'Descriptityron'},
  {id: 3, title: 'JavaScrbbipt 3', body: 'Descriptewerion'},
];

function App() {
  const [posts, setPosts] = useState(dataPosts);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  //* передача постов в POSTLIST c помощью useMemo
  //* таким образом избегаем проблему сортировки дефолтного состояния постов и вызова фукнции на каждой изменении состояния
  //* useMemo запоминает (кэширует результат) и передает его
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  //*Вся логика сортировки и поиска
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  //*получаем пост из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //*удаляем пост создавая функцию и прокидывая ее вниз
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className='App'>
      <MyButton style={{marginTop: '15px', marginBottom: '5px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} /> {/* //через props передаем callback  */}
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Посты про JS'}
      />
    </div>
  );
}

export default App;
