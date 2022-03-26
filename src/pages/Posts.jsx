import React, {useEffect, useState} from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import {usePosts} from '../hooks/usePosts';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from '../components/utils/pages';

function Posts() {
  //*useState
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  //*Server
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  //*получаем пост из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //*удаляем пост создавая функцию и прокидывая ее вниз
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  //*изменение номера страницы
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className='App'>
      <MyButton
        style={{marginTop: '15px', marginBottom: '5px'}}
        onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} /> {/* через props передаем callback  */}
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1 className='post__error'>Произошла ошибка</h1>}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'Посты про JS'}
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
