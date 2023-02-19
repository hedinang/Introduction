import React, { useState } from "react";
import { Button, Col, Drawer, Image, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { PicRightOutlined } from "@ant-design/icons";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import LeftHorizontalMenu from "./LeftHorizontalMenu";
import brand from '../../asset/img/header/raccoon1.jpg'

const Navbar = () => {
    const [rightVisible, setRightVisible] = useState(false);
    const showRightDrawer = () => {
        setRightVisible(!rightVisible);
    };
    return (
        <>
            <Header className="nav-header">
                <Row>
                    <Col lg={2} span={1}>
                    </Col>
                    <Col lg={4} span={18} className="brand">
                        <Image preview={false}
                            src={'https://weinlux.vn/wp-content/uploads/2022/10/Weinlux-logo-200.png'}
                        />
                    </Col>
                    <Col lg={12} span={0} >
                        <LeftHorizontalMenu mode={'horizontal'} />
                    </Col>
                    <Col lg={4} span={0}>
                        <RightMenu mode={'horizontal'} />
                    </Col>
                    <Col lg={2} span={1}>
                    </Col>
                    <Col lg={0} span={4}>
                        <Button className="menuButton" type="text"
                            onClick={showRightDrawer}
                        >
                            <PicRightOutlined />
                        </Button>
                    </Col>
                </Row>
                <Drawer
                    width={320}
                    closable={false}
                    onClose={showRightDrawer}
                    open={rightVisible}
                >
                    <LeftMenu mode={"inline"} />
                    <RightMenu mode={'inline'} />
                </Drawer>
            </Header>
        </>
    );
};

export default Navbar;
