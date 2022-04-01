import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';
import axios from 'axios'


export default function CarTable() {
    const { Column, ColumnGroup } = Table;
    const [car, setCar] = useState([])

    const url = 'http://localhost:5000/api/v1/'

    useEffect(()=>{
        getAllCar();
    },[])

    const getAllCar=()=>{
        axios.get(`${url}car`).then((res)=>{
            const allcar = res.data.data.car
            setCar([...allcar]);
        })
         
    }
    

    return (
        //<Layout index="3" headName="Car">
            <Table dataSource={car}>
                <Column title="Name" style={{fontWeight: 'bold'}} dataIndex="name" key="name" />
                <Column title="Code" dataIndex="code" key="code" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Deposit" dataIndex="deposit" key="deposit" />
                <Column title="Amount" dataIndex="amount" key="amount" />
                <Column title="Description" dataIndex="description" key="description" />
                <Column title="Model" dataIndex="model" key="model" />
                <Column title="WarrantyPeriod" dataIndex="warrantyPeriod" key="warrantyPeriod" />
                <Column title="Year" dataIndex="year" key="year" />
                <Column
                    title="color"
                    dataIndex="color"
                    key="color"
                    render={color => (
                        <>
                            {color.map(color => (
                                <Tag color="blue" key={color}>
                                    {color}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </Space>
                    )}
                />
            </Table>
        //</Layout>
    )
}

