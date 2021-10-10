export const SHOWRESULT="SHOWRESULT";
export const BUTTONTEXT="BUTTONTEXT";
export const SHOWWEEKTEXT="SHOWWEEKTEXT";

//button에 있는
export const showweektext=(v1:any, v2:any,v3:any,v4:any,v5:any,v6:any,v7:any,v8:any)=>({
    type : SHOWWEEKTEXT,
    weektext1:v1,
    weektext2:v2,
    weektext3:v3,
    weektext4:v4,
    weekimg1:v5,
    weekimg2:v6,
    weekimg3:v7,
    weekimg4:v8,
});

export const buttontext=(v:any)=>({
    type : BUTTONTEXT,
    buttontext:v,
});

export const showResult=(v:any)=>({
    type : SHOWRESULT,
    result:v,
});

