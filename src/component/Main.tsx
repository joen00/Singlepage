import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';


const Container = styled.section`
    display: flex;
    flex-direction: row;
`;

const Name=styled.p`

    position: relative;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    left:9rem; 
    top: 15rem;
    z-index: 3;
    font-size: 1.5rem;

`;

const Section01 = styled.section`

    position: relative;
    z-index: 1;
    left:2rem; 
    top: 2.5rem;
    width:300;
    height:10rem;
`;

const Section02 = styled.section`

    position: relative;
    left:-11rem; 
    top: 6rem;
    z-index: 2;
    width:10rem;
    height:10rem;
`;

const Motto = styled.section`

    margin-top: 10rem;
    font-size: 1.2rem;
    display: grid;
    line-height:2rem;
    justify-content: center;
    background-color: white;
    height:19rem;
    width:60rem;

`;

const Main=(state)=>{
    
    let states:any = useSelector(state => state);
    
    return (
        <React.Fragment>
            <Container>
            <Name>Kim A Young</Name>
            <Section01><img src={'05.png'} width="300" height="300"/></Section01>
            <Section02><img src={'01.jpg'} width="300" height="300"/></Section02>            
            <Motto><pre>"    All we can do is<br></br>    do our best torelish  <br></br>   this remarkable ride.   "</pre></Motto>
            </Container>
        </React.Fragment>
      );

}

export default Main;