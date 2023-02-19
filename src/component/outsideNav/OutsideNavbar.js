import React, { useState } from "react";
import { Button, Col, Drawer, Image, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { PicRightOutlined } from "@ant-design/icons";

import LeftHorizontalMenu from "./LeftHorizontalMenu";
import brand from '../../asset/img/header/raccoon1.jpg'
import RightMenu from "../nav/RightMenu";

const OutsideNavbar = () => {
    const [rightVisible, setRightVisible] = useState(false);
    const showRightDrawer = () => {
        setRightVisible(!rightVisible);
    };

    return (
        <>
            <Header className="nav-header">
                <Row>
                    <Col lg={4} span={0} />
                    <Col lg={3} span={20} >
                        <Image
                            height={46}
                            src={brand}
                        />
                    </Col>
                    <Col lg={10} span={0} className="nav-center">
                        <LeftHorizontalMenu mode={'horizontal'} />
                    </Col>
                    <Col lg={0} span={4}>
                        <Button className="menuButton" type="text"
                            onClick={showRightDrawer}
                        >
                            <PicRightOutlined />
                        </Button>
                    </Col>
                    <Col lg={3} span={0} className="nav-center out-right-menu">
                        <RightMenu mode={'horizontal'} />
                    </Col>
                    <Col lg={4} span={0} />
                </Row>
                {/* <Drawer
                    // title="Two-level Drawer"
                    width={320}
                    closable={false}
                    onClose={showRightDrawer}
                    open={rightVisible}
                >
                    <LeftMenu mode={"inline"} />
                    <RightMenu mode={'inline'} />
                </Drawer> */}
            </Header>
        </>
    );
};

export default OutsideNavbar;
