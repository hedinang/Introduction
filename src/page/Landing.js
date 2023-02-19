import React from 'react';
import { Carousel, Col, Row, Table } from "antd"
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout"
const Landing = () => {
    let contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        // textAlign: 'center',
        background: '#364d79',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const listSlide = [
        {
            img: 'red'
        },
        {
            img: 'black'
        }
    ]
    const slide = (sl) => {
        contentStyle.background = sl.img
        return <div>
            <div >
                <div style={contentStyle}>
                    <LeftCircleOutlined style={{ marginRight: '800px' }} />
                    <RightCircleOutlined style={{ marginLeft: '800px' }} />
                </div>
            </div>
        </div>
    }

    return (
        <>
            <Carousel >
                {listSlide.map(e => slide(e))}
            </Carousel>
        </>

    )
}
export { Landing }