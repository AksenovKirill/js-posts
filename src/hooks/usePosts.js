import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
  //* передача постов в POSTLIST c помощью useMemo
  //* таким образом избегаем проблему сортировки дефолтного состояния постов и вызова фукнции на каждой изменении состояния
  //* useMemo запоминает (кэширует результат) и передает его

  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts])

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
