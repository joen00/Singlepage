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
            <h3>저는 개발을 좋아하는 사람입니다.</h3>
            <p>개발 자체는 저에게 에너지와 삶을 활기차게 돌아가게 해주는 원동력입니다. 개발을 하면서 어려움과 고된 시간이 있었습니다.
                 하지만 어려움속에 극복하는 과정에서 얻는 것이 더 많았기 때문에 개발을 좋아합니다.
            </p>
            <h3>저는 솔선수범으로 모범을 보여주는 사람입니다. </h3>
            <p>카페에서 일했을 때 제일 꺼리고 번거로운 일은 음료에 필요한 재료 손질이었습니다. 
                모두가 하기 싫어하는 상황에서 저는 맡은 일에 책임감을 느끼고 꺼리기 보다는 빠르게 나서서 일해야 한다고 생각했습니다. 
                먼저 나서서 재료 손질을 시작했고 그 외에 다른 어려워하고 꺼리는 일을 먼저 했습니다. 
                반복적으로 나서서 하는 모습으로 모범을 보여 일을 시작하니 같이 일하던 분들도 나중에는 일을 꺼리지 않고 열심히 하는 모습까지 보여줬습니다. 
                어떤 상황이든 먼저 다가가 모범이 되면 긍정적인 효과가 나타난다는 것을 깨닫고 앞으로의 일에서도 솔선수범하는 모습으로 일합니다.</p>


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