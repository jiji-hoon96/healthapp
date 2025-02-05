import Title from "../components/Title";
import Nav from '../components/Navigation/Nav'
import { RightDiv } from "../components/Main/HomeSeparate";
import { threepower } from "../FakeD/power";
import {SoloBoardItem} from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import Footer from '../components/Footer/Footer'
import BoardSlider from "../components/Board/BoardSlider/BoardSlider";


function Board(){
    return (
        <>
            <Title name="Board"/>
            <Nav/>
            <BoardSlider/>
            <BoardNav style={{width:"50%" , margin:"0 auto",pointerEvents:"none"}} name={"3대 운동 게시판"} summary={"다른 사람의 3대 능력을 확인해보세요!"}/>
            <RightDiv style={{marginBottom:"150px", paddingRight:"0px"}}>
            {threepower.map((x)=> 
                        <SoloBoardItem key={Math.random()} item={x} color={"#3F8CFF"} value={"board"}/>
                )}
            </RightDiv>
            <Footer/>
        </>
        
    )
}

export default Board;