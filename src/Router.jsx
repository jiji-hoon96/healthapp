import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./Routes/Board";
import Exersise from "./Routes/Exersise";
import Freeboard from "./Routes/Freeboard";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import Sign from "./Routes/Sign";
import BoardPost from "./Routes/BoardPost"
import FreePost from "./Routes/FreePost"
import ExersisePost from "./Routes/ExersisePost"
import FindId from "./Routes/FindId"
import FindPw from "./Routes/FindPw"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/find_id" element={<FindId />} />
                <Route path="/login/find_pw" element={<FindPw />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/freeboard" element={<Freeboard />} />
                <Route path="/freeboard/:id" element={<FreePost />} />
                <Route path="/board" element={<Board />} />
                <Route path="/board/:id" element={<BoardPost />} />
                <Route path="/exersise" element={<Exersise />} />
                <Route path="/exersise/:id" element={<ExersisePost />} />
            </Routes>
        </BrowserRouter>

    )
}
export default Router;