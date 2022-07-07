import styled from "styled-components";

const MyInfo = styled.section`
    padding: 20px;
    border-radius: ${(props) => props.theme.radiusSize20};
    box-shadow: ${(props) => props.theme.shadowColor};
`;

const MyInfoTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    display: inline-block;
`;

const ThreeInfo = styled.div`
    display: flex;
    justify-content: space-around;

    border-radius: ${(props) => props.theme.radiusSize20};
    border: 1px solid #e4e4e4;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 24px;
        width: 25%;
        height: 100px;

        span {
            font-size: ${(props) => props.theme.fontSizeH4};
            font-weight: 500;
            line-height: 1.33333;
            margin-bottom: 8px;
        }

        b {
            font-size: ${(props) => props.theme.fontSizeH1};
            font-weight: 500;
            padding: 0 12px;

            @media all and (min-width: 480px) and (max-width: 767px) {
                font-size: ${(props) => props.theme.fontSizeH2};
            }
            @media all and (max-width: 479px) {
                font-size: ${(props) => props.theme.fontSizeH2};
            }
        }

        @media all and (min-width: 480px) and (max-width: 767px) {
            padding: 12px;
        }
        @media all and (max-width: 479px) {
            padding: 12px;
        }
    }

    div:not(:last-child) {
        border-right: 1px solid #e4e4e4;
    }
`;

export default function ContentMyinfoMain({ data, children }) {
    return (
        <MyInfo>
            <MyInfoTitle>내 정보</MyInfoTitle>
            {children}
            <ThreeInfo>
                {Object.keys(data).map((name) => (
                    <div>
                        <span>{name}</span>
                        <b>{data[name]}</b>
                    </div>
                ))}
            </ThreeInfo>
        </MyInfo>
    );
}
