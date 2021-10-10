import {SHOWRESULT,BUTTONTEXT,SHOWWEEKTEXT} from "../action/index";

const initState = {
    weektext1:"",
    weektext2:"",
    weektext3:"",
    weektext4:"",
    weekimg1:"",
    weekimg2:"",
    weekimg3:"",
    weekimg4:"",

    buttontext:"",
    result:"",
}

const reducer = (state = initState,action)=>{ 
    switch(action.type) { 
        case SHOWWEEKTEXT:
            return {...state, weektext1:action.weektext1,
                 weektext2:action.weektext2,
                 weektext3:action.weektext3,
                 weektext4:action.weektext4,
                 weekimg1:action.weekimg1,
                 weekimg2:action.weekimg2,
                 weekimg3:action.weekimg3,
                 weekimg4:action.weekimg4    
                };
        case BUTTONTEXT:
            return {...state, buttontext:action.buttontext};
        case SHOWRESULT:
            return {...state, result:action.result};
        default:   
            return state;
    }
}

export default reducer;