import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {showResult,buttontext,showweektext} from '../action/index';
import Buttonmain from './Buttonmain';



const TmpButton = styled.button`

    color: black;
    background-color: white;
    font-size: 1rem;   
    margin-top: 1.5rem;
    margin-left: 20rem;
    border:1rem;
    width:8rem;
    height:2.5rem;

    ${props => {
        const recvColor = props.color || "white";

        return css`

            background-color: ${recvColor};

            &:hover {
                background-color: ${lighten(0.1,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;

    }}

`;

const Greyp = styled.p`
    color: grey;
    font-size: 0.8rem; 
`;

const Back = styled.section`
    width:30rem;
    height:18.9rem;
    background-color: #f5f1eb;
`;

const Imgcenter = styled.section`
    text-align: center;
`;

const Button2=(state)=>{
    const dispatch = useDispatch();

    const onClick02=(e)=>{   

        dispatch(buttontext(""));
        dispatch(showResult(""));
        dispatch(showweektext(
        <section>
            <h2>1주차</h2>
            <p>react, node</p>
            <p>1. 싱글페이지 어플리케이션</p>
            <p>2. 데이터 처리가 용이하다.</p>
            <p>3. 컴포넌트가 있다.</p>
        </section>,
        
        <section>
            <h2>2, 3주차</h2>
            <p>1. map,reduce,filter,forEach</p>
            <p>2. 변수 선언 종류</p>
            <p>   let은 재선언이 불가능, const는 상수 다시는 못바꿈</p>
            <p>3. 함수 표현식, Spread Operator</p>
        </section>,

        <section>
            <h2>4, 5, 6주차</h2>
            <p>1. nodejs</p>
            <p>   자바스크립트 런타임</p>
            <p>2. 리덕스</p>
            <p>   자바로 된 라이브러리, 상태관리</p>
            <p>   store, action, reducer, component</p>
            <p>3. styled component</p>
        </section>,

        <section>
            <h2>7, 8주차</h2>
            <p>1. 웹팩</p>
            <p>   파일을 동시에 관리, 특정자바스크립트 파일 한개가 나옴</p>
            <p>2. Fetch API</p>
        </section>,

        <section>
            <Greyp>슬라이딩 퍼즐 - 웹팩 적용</Greyp>
            <Back><Imgcenter><img src={'week1.png'} width="250"/></Imgcenter></Back>
        </section>,

        <section>
            <Greyp>슬라이딩 퍼즐 - 웹팩 적용</Greyp>
            <Back><Imgcenter><img src={'week2.png'} width="250"/></Imgcenter></Back>
        </section>,

        <section>
            <Greyp>슬라이딩 퍼즐 - 웹팩 적용</Greyp>
            <Back><Imgcenter><img src={'week3.png'} width="250"/></Imgcenter></Back>
        </section>,

        <section>
            <Greyp>슬라이딩 퍼즐 - 웹팩 적용</Greyp>
            <Back><Imgcenter><img src={'week4.png'} width="250"/></Imgcenter></Back>
        </section>,
        ));


    }  

    return (
        <React.Fragment>   
        <TmpButton onClick={onClick02}>study</TmpButton>           
        </React.Fragment>
    );
    

}

export default Button2;