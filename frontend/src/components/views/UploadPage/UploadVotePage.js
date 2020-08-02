import React from 'react';

import {Form, Input} from 'antd'


function UploadVotePage(props) {

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div style={{}}>
            <Form onFinish={onFinish}>
                <Form.Item name="title">
                    <Input placeholder="제  목"/>
                </Form.Item>
                
            </Form>
            
        </div>
    );
}

export default UploadVotePage;