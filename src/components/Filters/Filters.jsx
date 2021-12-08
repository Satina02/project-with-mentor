import React, { useContext, useEffect } from "react";
import {Select, Slider} from 'antd'
import { brandsContext } from "../../contexts/brandsContext";

const Filters = ({brand, setBrand, price, setPrice}) => {
    const {getBrands, brands} = useContext(brandsContext)
    useEffect(()=>{
        getBrands()
    }, [])
    return (
        <div style={{marginTop:"20px"}}>
            <Select style={{width:"100%"}} allowClear 
                onChange={(e) => setBrand(e)} value={brand} 
                mode="multiple" placeholder="Filter by brand">
                {brands.map((item) => (
                     <Select.Option value={item.brand} key={item.id}>{item.brand}</Select.Option>
                ))}
            </Select>
            <Slider onChange={(e) => setPrice(e)} 
                    range defaultValue={[1, 1000000]} 
                    min={0} max={1000000} step={100}
                    value={price}
            />
        </div>
    );
};

export default Filters; 