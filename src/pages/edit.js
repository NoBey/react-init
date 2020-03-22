import React from "react";

import { Carousel, Row, Col, Pagination, Card } from "antd";
import styles from "./index.less";
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class PicturesWall extends React.Component {
  constructor(){
    super()
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    };
  }


  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = '//xbb.nobey.cn/' + file.response.key
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  }

  Upload = async(file) => {
    console.log(file)
    const formData = new FormData();
    const [name, type]  =  file.name.split('.')  
    const key = `${name}-${Date.now()}.${type}`
    formData.append("key", key);
    formData.append("file", file);
    formData.append("token", 'jQ59i1pFrbhq4iIom_3X7_CSFPwVQ8PFvZaApeTx:oDHBWDNPht4GLenj6DE7jnAgjE0=:eyJzY29wZSI6InRlc3QxMjMzNDQzIiwiZGVhZGxpbmUiOjE1ODQ4Njg1MDl9');
    await axios({
      method:'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url: '//up.qbox.me',
      data: formData,
    })
    const fileList = this.state.fileList
    file.url = '//xbb.nobey.cn/' + key
    fileList.push(file)
    this.setState({fileList})

  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
        beforeUpload={(file) => {
          this.Upload(file)
          return false
        }}
             action="//up.qbox.me"
             data={{ token: 'jQ59i1pFrbhq4iIom_3X7_CSFPwVQ8PFvZaApeTx:oDHBWDNPht4GLenj6DE7jnAgjE0=:eyJzY29wZSI6InRlc3QxMjMzNDQzIiwiZGVhZGxpbmUiOjE1ODQ4Njg1MDl9' }}
          listType="picture-card"
          fileList={fileList}
          multiple={true}
          // onPreview={this.handlePreview}
          // onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
const { Meta } = Card;
const Pages = () => (
  <>
   
    <div className={styles.body}>

      <PicturesWall />
    </div>


  </>
);

export default Pages;
