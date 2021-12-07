import React, { useEffect } from 'react';
import {List, Avatar} from 'antd'
import { useContext } from 'react/cjs/react.development';
import { brandsContext } from '../../contexts/brandsContext';

const AdminBrandsList = () => {
    const { getBrands, brands, deletebBrand } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <List
      className="demo-loadmore-list items-list"
      itemLayout="horizontal"
      dataSource={brands}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit" onClick={() => deletebBrand(item.id)}>delete</a>]}>
          <List.Item.Meta
            avatar={<Avatar src={item.logo} />}
            title={<a href="https://ant.design">{item.brand}</a>}
          />
        </List.Item>
      )}
    />
  );
};

export default AdminBrandsList;