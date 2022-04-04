import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';
import RefAutoComplete from 'antd/lib/auto-complete';


export default function AccessoryBillTable() {
    const { Column, ColumnGroup } = Table;
    const [accessoryBill, setAccessoryBill] = useState([
        {
            "userId": {
                "$oid": "623df7cf3341cbaf323e33ea"
            },
            "accessoryInfo": [{
                "itemId": {
                    "$oid": "623c987cd4eb27ee609c4b39"
                },
                "quantity": 6
            }, {
                "itemId": {
                    "$oid": "623e9a2151e6a82f1e1a9f6f"
                },
                "quantity": 1
            }],
            "totalPrice": 123456,
            "deliveryMethod": "COD",
            "status": "pending",
        }
    ])

    return (
            <Table dataSource={accessoryBill}>
                <Column title="User Name" dataIndex="" key="name" />
                <Column title="Code" dataIndex="" key="code" />
                <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" />
                <Column title="Delivery Method" dataIndex="deliveryMethod" key="deliveryMethod" />
                <Column title="Status" dataIndex="status" key="status" />
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
    )
}
 



