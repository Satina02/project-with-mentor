import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Input, Select, InputNumber } from "antd";
import { productsContext } from "../../contexts/productsContext";
import { brandsContext } from "../../contexts/brandsContext";

const AddProductModal = () => {
  const { createProduct } = useContext(productsContext)
  const {getBrands, brands} = useContext(brandsContext)
  useEffect(()=>{
      getBrands()
  }, [])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values).then(() => handleCancel())
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
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
            <InputNumber min={1} style={{width:"100%"}} />
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
            <Button type="primary" htmlType="submit">
              Add product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;