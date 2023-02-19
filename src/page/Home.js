import { Carousel, Col, Image, Row } from 'antd';
import React from 'react';
import d2 from '../asset/img/leader/d2.jpg'
import duc1 from '../asset/img/leader/duc1.jpg'
import tu2 from '../asset/img/leader/tu2.jpg'
import na1 from '../asset/img/leader/na1.jpg'

const Home = () => {
    const partnerList = [
        {
            img: ''
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-17-50mobi.png'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-25-11-20-13viettel.png'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-14-44R-removebg-preview.png'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-55-49evn2.png'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-10-29-25byt-removebg-preview.png'
        },
        {
            img: ''
        }
    ]
    const serviceList = [
        {
            img: ''
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            title: 'Digital Marketing Online',
            criteriaList: ['GOOGLE ADS', 'MMS BRANDNAME', 'YOUTUBE TRAFFIC', 'FACEBOOK ADS', 'INSTALLATION TURN OPTIMIZATION']
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            title: 'Information Technology',
            criteriaList: ['VIRTUAL SERVER RENTAL', 'PLATFORM', 'WEBSITE DESIGN FOR BUSINESS', 'BUSINESS SOLUTION PROVIDER', 'SOFTWARE OUTSOURCING']
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            title: 'Value-added services',
            criteriaList: ['ADCALL', 'AUTO SMS', 'VOICE OTP', 'MOBILE GAME']
        },
        {
            img: ''
        }
    ]
    const slideExperienceList = [
        { img: 'https://ghdc.vn/home/image1-home3.png' },
        { img: 'https://ghdc.vn/home/image2-home3.png' },
        { img: 'https://ghdc.vn/home/image1-home3.png' },
        { img: 'https://ghdc.vn/home/image2-home3.png' }
    ]
    const slideLeaderList = [
        {
            img: ''
        },
        { img: d2, name: 'Trần Dũng', position: 'Nodejs and Reactjs' },
        { img: na1, name: 'Nguyễn Nam Anh', position: 'Java and Ios' },
        { img: duc1, name: 'Nguyễn Đức', position: 'Android and Flutter' },
        {
            img: tu2, name: 'Tạ Anh Tú', position: 'Java and Reactjs'
        },
        {
            img: ''
        },
    ]
    const partner = (e) => {
        const img = e.img
        switch (img) {
            case '':
                return <Col span={3}>
                </Col>
            default:
                return <Col span={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image preview={false} src={e.img} style={{ padding: '0 25px' }} />
                </Col>
        }
    }
    const service = (e) => {
        const img = e.img
        switch (img) {
            case '':
                return <Col lg={3} span={0}>
                </Col>
            default:
                return <Col lg={6} span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* <Image src={e.img} style={{ padding: '0 25px' }} /> */}
                    <Row ><h2>{e.title}</h2></Row>
                    {e.criteriaList.map(f => <Row style={{ width: '100%', padding: '0 20px', color: '#337ab7', marginTop: '10px', fontWeight: 'bold' }}>{f}</Row>)}
                </Col>
        }
    }
    const slideExperience = e => {
        return <div>
            <h3 style={contentStyle}>
                <Image src={e.img} preview={false} />
            </h3>
        </div>
    }
    const leader = e => {
        const img = e.img
        switch (img) {
            case '':
                return <Col lg={4} span={0}>
                </Col>
            default:
                return <Col lg={4} span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Image src={e.img} width={200} height={300} preview={false} />
                    <h2 style={{ width: '100%', justifyContent: 'center', marginTop: '10px', display: 'flex' }}>{e.name}</h2>
                    <h3 style={{ width: '100%', justifyContent: 'center', color: '#797979', marginTop: '10px', display: 'flex' }}>{e.position}</h3>
                </Col>
        }
    }

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const contentStyle = {
        margin: 0,
        // height: '160px',
        color: '#364d79',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '#364d79',
    };
    return (
        <>
            <div className='container'>
                {/* <video
                    loop
                    autoPlay
                    muted
                    className='video'
                    width={'100%'}
                    poster='https://ghdc.vn/uploads/images/banner/2022-06-24-09-46-55bg-xanh.png'>
                    <source src="https://youtu.be/ecBco63zvas" type="video/mp4" />
                    
                </video> */}
                <iframe width="100%" height="750px" src="https://www.youtube-nocookie.com/embed/ecBco63zvas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <Row>
                {partnerList.map(e => partner(e))}
            </Row>
            <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Our service</h2>
            <Row>
                {serviceList.map(e => service(e))}
            </Row>
            <Row style={{ fontSize: '30px', justifyContent: 'center', marginTop: '150px' }}>More than 10 years of experience in the
                field of information technology
            </Row>
            <Carousel autoplay afterChange={onChange}>
                {slideExperienceList.map(e => slideExperience(e))}
            </Carousel>
            <Row style={{ fontSize: '30px', justifyContent: 'center', marginTop: '150px' }}>Leadership team
            </Row>
            <Row style={{ marginTop: '50px' }}>
                {slideLeaderList.map(e => leader(e))}
            </Row>
        </>
    )
}
export default Home 