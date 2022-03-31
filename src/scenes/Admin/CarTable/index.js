import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';
import Layout from "../Main/index"


export default function CarTable() {
    const { Column, ColumnGroup } = Table;
    const [car, setCar] = useState([
        {
            "name": "test",
            "code": "233443221",
            "price": 3600000000,
            "deposit": 50000000,
            "image": "123456qwet",
            "amount": 100,
            "description": "this is description for test car",
            "model": "Hijeep",
            "warrantyPeriod": 2,
            "year": 2006,
            "specification": {
                "displacement": 600,
                "power": 200,
                "maxSpeed": 235,
                "acceleration": 2.1,
                "weight": 1500
            },
            "color": ["yelow", "red"],
            "special": "max speed very fast",
        },
        {
            "name": "test",
            "code": "233443221",
            "price": 3600000000,
            "deposit": 50000000,
            "image": "123456qwet",
            "amount": 100,
            "description": "this is description for test car",
            "model": "Hijeep",
            "warrantyPeriod": 2,
            "year": 2006,
            "specification": {
                "displacement": 600,
                "power": 200,
                "maxSpeed": 235,
                "acceleration": 2.1,
                "weight": 1500
            },
            "color": ["yelow", "red"],
            "special": "max speed very fast",
        },
        {
            "name": "test",
            "code": "233443221",
            "price": 3600000000,
            "deposit": 50000000,
            "image": "123456qwet",
            "amount": 100,
            "description": "this is description for test car",
            "model": "Hijeep",
            "warrantyPeriod": 2,
            "year": 2006,
            "specification": {
                "displacement": 600,
                "power": 200,
                "maxSpeed": 235,
                "acceleration": 2.1,
                "weight": 1500
            },
            "color": ["yelow", "red", "red", "red", "red", "red"],
            "special": "max speed very fast",
        },
    ])

    return (
        <Layout index="3" headName="Car">
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
        </Layout>
    )
}

