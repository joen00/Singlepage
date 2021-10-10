import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {showResult} from '../action/index';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';

const ButtonDiv = styled.section`

    margin-top: -3rem;
    justify-content: center;

`;

const Container = styled.section`

    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10rem;
    justify-content: space-evenly;
    align-items: center; 

`;

const Texting = styled.section`

    margin-left: 20rem;
    font-size: 1rem;
    flex:30rem;
    width:10rem;
    
`;

const Imagestyle = styled.section`

    height:200px;
    font-size: 1rem;
    flex:30rem;

`;



const Buttonm=(state)=>{
    let states:any = useSelector(state => state);
    const data=[0,1,2,3];

    return (
        <React.Fragment>   
            <ButtonDiv>
            <Button1/>
            <Button2/>
            <Button3/>

            <Container>
            <Texting>
                {states.buttontext}
                {states.weektext1}
            </Texting>
            <Imagestyle>
                {states.result}
                {states.weekimg1}           
            </Imagestyle> 
            </Container>

            <Container>
            <Texting>
                {states.weektext2}
            </Texting>
            <Imagestyle>
                {states.weekimg2}           
            </Imagestyle> 
            </Container>  
            <Container>
            <Texting>
                {states.weektext3}
            </Texting>
            <Imagestyle>
                {states.weekimg3}           
            </Imagestyle> 
            </Container>  
            <Container>
            <Texting>
                {states.weektext4}
            </Texting>
            <Imagestyle>
                {states.weekimg4}           
            </Imagestyle> 
            </Container> 
              
            </ButtonDiv>
        </React.Fragment>
        );
    

}

export default Buttonm;