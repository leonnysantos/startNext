import React from "react";
import { Col, Row } from "reactstrap";
import { ProductType } from "../services/products";
import ProductCard from "./ProductCard";

type ProductListProps = {
    products: ProductType[];
};

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <Row className="g-3 g-md-4 g-lg-5">
                {products.map((product) => (
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ProductsList;
