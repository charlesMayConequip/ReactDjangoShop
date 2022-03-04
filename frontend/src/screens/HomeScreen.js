import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import { useSearchParams } from 'react-router-dom'

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const [searchParams, setSearchParams] = useSearchParams();
  let keyword = searchParams.get("keyword");
  let mypage = searchParams.get("page");

  useEffect(() => {
    console.log(keyword)
    dispatch(listProducts(keyword, mypage));
  }, [dispatch, keyword, mypage]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate page={page} pages={pages} keyword={keyword}/>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
