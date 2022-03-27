import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
  return (
    <div>
      <MyInput
        style={{marginBottom: '15px'}}
        value={filter.query}
        onChange={(event) =>
          setFilter({...filter, query: event.currentTarget.value})
        }
        placeholder='Поиск по названию...'
      />
      <div className='select__wrapper'>
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
        <MySelect
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue='Загрузка постов'
          options={[
            {value: 5, name: '5 постов'},
            {value: 10, name: '10 постов'},
            {value: 25, name: '25 постов'},
            {value: -1, name: 'все посты'},
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;
