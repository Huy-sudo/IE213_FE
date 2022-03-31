import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';
import Layout from "../Main/Layout"


export default function AccessoryTable() {
    const { Column, ColumnGroup } = Table;
    const [accessory, setAccessory] = useState([
        {
            "name": "Kính xe BMW",
            "code": "1234ad",
            "price": 1500000,
            "type": "glass",
            "image": "1234567",
            "amount": 10,
            "description": "none",
            "warrantyPeriod": 1,
            "specification": {
                "height": "100",
                "weight": "0.5"
            },
            "color": ["yellow", "red"],
        }
    ])

    return (
       // <Layout index="4" headName="Accessory">
        <Table dataSource={accessory}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Code" dataIndex="code" key="code" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Type" dataIndex="type" key="type" />
            <Column title="Amount" dataIndex="amount" key="amount" />
            <Column title="Description" dataIndex="description" key="description" />
            <Column title="WarrantyPeriod" dataIndex="warrantyPeriod" key="warrantyPeriod" />
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
       // </Layout>
    )
}

