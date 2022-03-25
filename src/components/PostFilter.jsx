import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        style={{marginBottom: '15px'}}
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.currentTarget.value})}
        placeholder='Поиск по названию...'
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  );
};

export default PostFilter;
