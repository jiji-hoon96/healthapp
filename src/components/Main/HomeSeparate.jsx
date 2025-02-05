import styled from "styled-components";
export const HomeDiv = styled.div`
    width:100%;
    display: flex;
    height: 100%;
    margin-bottom: 200px;
    @media all and (min-width:480px) and (max-width:767px) {
        flex-direction: column;
    } 
    @media all and (max-width:479px) {
        flex-direction: column;
    }
`

export const LeftDiv =styled.div`
    width:35%;
    display: flex;
    align-items: center;
    height:100%;
    margin: 0 auto;
    flex-direction: column;
    @media all and (min-width:480px) and (max-width:767px) {
        width:100%;
        flex-direction: row;
    } 
    @media all and (max-width:479px) {
        width:100%;
        flex-direction: row;
    }
`

export const RightDiv =styled.div`
    width:65%;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(226px,1fr));
    gap: 20px 20px;
    padding-right: 50px;
    align-items: center;
    margin: 0 auto;
    @media all and (min-width:480px) and (max-width:767px) {
        width:90%;
        grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
        padding: 0px 10px;
    } 
    @media all and (max-width:479px) {
        width:90%;
        grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
        padding: 0px 10px;
    }
`

export const ExersiseDiv =styled.div`
    height: 50%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const ThreePowerDiv= styled.div`
   height: 50%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll; 
`
