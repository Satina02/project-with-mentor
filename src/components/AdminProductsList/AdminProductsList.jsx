import React, { useEffect, useState } from 'react';
import {List, Avatar} from 'antd'
import { useContext } from 'react/cjs/react.development';
import { productsContext } from '../../contexts/productsContext';
import { Link, useSearchParams } from 'react-router-dom';
import { Pagination } from 'antd';

const AdminProductsList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {getProducts, deleteProduct, products} = useContext(productsContext)
    const [currentPage, setCurrentPage] = useState(10)
    const [limit, setLimit] = useState(10)
        useEffect(()=>{
            setSearchParams({
                q:"",
                _page:currentPage,
                _limit:limit
            })
        }, [])
 
    useEffect(()=>{
        setSearchParams({
            q:"",
            _page:currentPage,
            _limit:limit
        })
    }, [currentPage, limit])
    useEffect(()=>{
        getProducts()
    }, [searchParams])
    return (
        <>
        <List
            className="demo-loadmore-list items-list"
            itemLayout="horizontal"
            dataSource={products}
            renderItem={(item) => (
                <List.Item actions={[<a key="list-loadmore-edit" onClick={() => deleteProduct(item.id)}>delete</a>, 
                <Link to={`/edit/${item.id}`}>
                    edit</Link>, 
                < Link to={`/products/${item.id}`}>
                    more</Link> ]}>
                <List.Item.Meta
                    avatar={<Avatar src={item.image1} />}
                    title={<a>{item.brand}</a>}
                />
                </List.Item>
      )}
    />
        <Pagination onChange={(page, limit) => {setCurrentPage(page); setLimit(limit)}}
                    defaultCurrent={1} total={50} 
                    current={+currentPage}
                    pageSize={+limit}
        />
    </>
    );
};

export default AdminProductsList;