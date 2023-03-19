import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload
} from 'antd';

import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react';
import Header from '../components/layout/Header';

const CreateProject = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <>
            <Header />
            <div className='CreateProduct'>

                <Form
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                    style={{
                        maxWidth: 1000,
                    }}
                >
                    <Form.Item label="Project name">
                        <Input />
                    </Form.Item>
                    
                    <Form.Item label="Project owner name ">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Fields">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone number">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Which organize does this project be long to? ">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Project Description  ">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Why do you launch this project? ">
                        <Input />
                    </Form.Item>
                    <Form.Item label="What is your project risk and How do you tackle it?">
                        <Input />
                    </Form.Item>
                    <Form.Item label="What is your project contribute to social?">
                        <Input />
                    </Form.Item>
                    <Form.Item label="How much does your project need?">
                        <Input />
                    </Form.Item>
                    <Form.Item label="How long do you want to call to invest?">
                        <DatePicker />
                    </Form.Item>
                    
                    <Form.Item label="Upload" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};
export default CreateProject;