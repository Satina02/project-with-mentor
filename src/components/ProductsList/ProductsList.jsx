import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Card, Input, Pagination } from "antd";
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { productsContext } from "../../contexts/productsContext";

import "./ProductList.css";
import Filters from "../Filters/Filters";

const { Meta } = Card;

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const [showFilters, setShowFilters] = useState(false)
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
    });
  }, [search, page, limit]);
  console.log(products);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="products-search">
        <div style={{cursor:"pointer"}} onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "25vw" }}
          placeholder="Search..."
        />
      </div>
      {showFilters ? <Filters /> : null}
      <div className="products-list">
        {products.map((item) => (
          <Card
            hoverable
            key={item.id}
            style={{ width: "280px", margin: "10px" }}
            cover={<img alt="example" src={item.image1} />}
            actions={[
              <StarOutlined style={{ color: "black", fontSize: "25px" }} />,
              <ShoppingCartOutlined
                style={{ color: "black", fontSize: "25px" }}
              />,
              <Link to={`/products/${item.id}`}>
                <EllipsisOutlined
                  style={{ color: "black", fontSize: "25px" }}
                  key="ellipsis"
                />
              </Link>,
            ]}
          >
            <Meta
              title={item.brand}
              description={
                <>
                  <h3>{item.model}</h3>
                  <h2>{"$" + item.price}</h2>
                </>
              }
            />
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default ProductsList;