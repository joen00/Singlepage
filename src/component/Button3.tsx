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


const Section01 = styled.section`

    position: relative;
    z-index: 2;
    left:-38rem; 
    height:10rem;
    width:10rem;
`;

const Section02 = styled.section`

    position: relative;
    text-align: center;
    left:-36rem; 
    top: -8rem;
    z-index: 1;
    width:10rem;
    height:10rem;

`;

const Goaltext=styled.p`

    position: relative;
    z-index: 3;
    font-size: 1rem;
    left:-30rem; 
    top: 10rem;

`;

const Button3=(state)=>{
    const dispatch = useDispatch();
    const onClick03=(e)=>{   
       
        dispatch(buttontext(""));
        dispatch(showResult(<section>
            <Goaltext>목표나 더 배우고 싶은 것 어떤 분야에 대해서 뭘 하고싶은지 </Goaltext>
            <Section01><img src={'06.png'} width="900" height="300"/></Section01>
            <Section02><img src={'07.jpg'} width="900" height="300"/></Section02>
        </section>));
        dispatch(showweektext("","","","","","","",""));
        
    }

    return (
        <React.Fragment>               
            <TmpButton onClick={onClick03}>goal</TmpButton>            
        </React.Fragment>
      );

}

export default Button3;