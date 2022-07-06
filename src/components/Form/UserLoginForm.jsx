import React, { useState } from "react";
import DescTextInput from "./DescTextInput";
import { PuppleButton } from "../Asset/PuppleButton";
import { FormGroup, Form } from "./FromStyle";

export default function UserInputForm({ onSubmit }) {
    const [usrInputs, setUsrInputs] = useState({
        id: "",
        password: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setUsrInputs({
            ...usrInputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //새로고침 방지

        return onSubmit(e, {
            id: usrInputs.id,
            password: usrInputs.password,
        });
    };

    return (
        <FormGroup>
            <Form onSubmit={handleSubmit}>
                <DescTextInput
                    type="text"
                    name="id"
                    placeholder="아이디"
                    onChange={handleChange}
                    required
                />

                <DescTextInput
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    onChange={handleChange}
                    required
                />
                <PuppleButton type="submit" info={"로그인"}></PuppleButton>
            </Form>
        </FormGroup>
    );
}