import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { productsContext } from '../../contexts/productsContext';
import { Button, Form, Input, Select } from "antd";
import { brandsContext } from '../../contexts/brandsContext';


const EditProduct = () => {
    const params = useParams()
    const novigate = useNavigate()
    const { getOneProduct, oneProduct, updateProduct } = useContext(productsContext)
    const [form] = Form.useForm()
    const {getBrands, brands} = useContext(brandsContext);

    useEffect(() => {
        getOneProduct(params.id)
        getBrands()
    }, [])

    useEffect(() =>{
        form.setFieldsValue(oneProduct)
    }, [oneProduct])
    const onFinish = (values) => {
        console.log("Success:", values);
        updateProduct(params.is, values).then(() => novigate ("/admin"))
    };
    return (
        <div className="container" style={{marginTop:"15px"}}>
            <h2>Edit</h2>
            <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          form={form}
        >
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Select>
               {brands.map((item) => (
                   <Select.Option key={item.id} value={item.brands}>{item.brands}</Select.Option>
               ))}
            </Select>
          </Form.Item>
          
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
               <Input />
              </Form.Item>
              <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
              <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
              <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Video"
            name="video"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={`/admin`} type="primary" htmlType="submit">
              Edit product
            </Button>
          </Form.Item>
        </Form>
        </div>
    );
};

export default EditProduct;