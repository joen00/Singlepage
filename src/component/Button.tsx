import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {showResult} from '../action/index';
//import Hi from '../img/340.jpg'


const ButtonDiv = styled.div`

    margin-top: 1rem;
    justify-content: center;

`;

const ResultStyle = styled.div`

    font-size: 3rem;
    display: grid;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 5rem;

`;

const TmpButton = styled.button`

    color: black;
    background-color: white;
    font-size: 1rem;   
    margin-top: 1.5rem;
    margin-left: 20rem;
    border:1rem;

    ${props => {
        const recvWidth=props.width || "8";
        const recvHeigth=props.height || "2.5";
        const recvColor = props.color || "white";

        return css`
            width : ${recvWidth}rem;
            height :  ${recvHeigth}rem;
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

const images=[""];


const Button=(state)=>{
    let states:any = useSelector(state => state);
    const dispatch = useDispatch();

    const b1:string="introduce";
    const b2:string="career";
    const b3:string="goal";

    const r=states.result;

    const onClick01=(e)=>{  

        if(r!=b1){
            dispatch(showResult(<img src={'03.jpg'} width="300"/>));
        }
        else{
            dispatch(showResult(""));
        }

    }   

    const onClick02=(e)=>{   

        if(r!=b2){
            dispatch(showResult(b2));
        }
        else{
            dispatch(showResult(""));
        }
    }  
    
    const onClick03=(e)=>{   

        if(r!=b3){
            dispatch(showResult(b3));
        }
        else{
            dispatch(showResult(""));
        }
    }  

    return (
        <React.Fragment>   
            <ButtonDiv>
            <TmpButton onClick={onClick01}>introduce</TmpButton>
            <TmpButton onClick={onClick02}>career</TmpButton>
            <TmpButton onClick={onClick03}>goal</TmpButton>
            <ResultStyle>{states.result}</ResultStyle>
            </ButtonDiv>
        </React.Fragment>
      );

}

export default Button;