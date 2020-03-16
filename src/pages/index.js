import React from "react";

import { Carousel, Row, Col, Pagination, Card } from "antd";
import styles from "./index.less";

const { Meta } = Card;
const Pages = () => (
  <>
    <Carousel autoplay>
      <div className={styles.carousel}>
        <img
          src={
            "https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M08/00/0A/ChMljV14q-iIW3QRAAj4eP8itnAAAPwwAE0z9UACPiQ973.jpg"
          }
        />
      </div>
      <div className={styles.carousel}>
        <img
          src={
            "https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M08/00/0A/ChMljV14q-iIW3QRAAj4eP8itnAAAPwwAE0z9UACPiQ973.jpg"
          }
        />
      </div>
      <div className={styles.carousel}>
        <img
          src={
            "https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M08/00/0A/ChMljV14q-iIW3QRAAj4eP8itnAAAPwwAE0z9UACPiQ973.jpg"
          }
        />
      </div>
      <div className={styles.carousel}>
        <img
          src={
            "https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M08/00/0A/ChMljV14q-iIW3QRAAj4eP8itnAAAPwwAE0z9UACPiQ973.jpg"
          }
        />
      </div>
    </Carousel>
    <div className={styles.body}>
    <Row style={{pading: '40px'}} gutter={[16, 16]}>
      {[1,1,2,33,3,3,3,3,3,3,3,2,2,3].map((k, i) => (
        <Col span={6}>
          <Card
            hoverable
            cover={
              <img
                style={{height: '300px'}}
                alt="example"
                src={i%2 ? "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" :  "https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M08/00/0A/ChMljV14q-iIW3QRAAj4eP8itnAAAPwwAE0z9UACPiQ973.jpg"}
              />
            }
          >
            <Meta title="Europe Street beat"/>
          </Card>
        </Col>
      ))}
    </Row>
    <Pagination defaultCurrent={1} total={50} />
    </div>


  </>
);

export default Pages;
