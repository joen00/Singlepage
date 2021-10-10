import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {showResult,buttontext,showweektext} from '../action/index';

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

const Button1=(state)=>{
    const dispatch = useDispatch();

    const onClick01=(e)=>{  

        dispatch(buttontext(
        <div>
            <h2>자기소개</h2>
            <p>자기소개 내용</p>
            <p>자기소개 내용</p>
            <p>자기소개 내용</p>
        </div>)
        );
        dispatch(showResult(<img src={'02.jpg'} width="300"/>));
        dispatch(showweektext("","","","","","","",""));
    }   
 
    return (
        <React.Fragment>              
            <TmpButton onClick={onClick01} >introduce</TmpButton>          
        </React.Fragment>
      );
}

export default Button1;