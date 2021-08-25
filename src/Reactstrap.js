import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const item = [
    {
        src: 'http://bitly.kr/QUnJzAodA',
        altText: ' 슬라이드1 이미지 대체 문구',
        caption: ' 슬라이드1 설명',
        header: ' 슬라이드1 제목'
    },
    {
        src: 'http://bitly.kr/n3vBOWt9g',
        altText: ' 슬라이드2 이미지 대체 문구',
        caption: ' 슬라이드2 설명',
        header: ' 슬라이드2 제목'
    },
    {
        src: 'http://bitly.kr/uzWLMeIJh',
        altText: ' 슬라이드3 이미지 대체 문구',
        caption: ' 슬라이드3 설명',
        header: ' 슬라이드3 제목'
    }
];

class Reactstrap extends Component{
    render() {
        return (
            <UncontrolledCarousel item={item} />
        )
    }
}

export default Reactstrap;