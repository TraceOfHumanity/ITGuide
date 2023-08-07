import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #fff;
    border: 1px solid #000;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;