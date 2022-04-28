import React,{FC, MouseEventHandler} from 'react'
import styled from 'styled-components';

export interface ButtonProps {
    text?: string,
    primary?:boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 2px;
    display: inline-block;
    rounded;
    padding: ${(props) => props.size === "small"? "7px 25px 8px" : (props.size === "medium"? "9px 30px 11px" : "14px 30px 16px" )};
    color: ${(props) => props.primary? "white":"white"};
    background-color: ${(props) => props.primary ? "#1b116e":"red"};
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    &:hover {
      background-color: ${(props) => props.primary ? "#1b116e":"gray"};
    }
    &:active {
        border: solid 2px red;
        padding: ${(props) => props.size === "small"? "10px 50px 6px" : (props.size === "medium"? "7px 28px 9px" : "12px 28px 14px" )};
    }
`;

const Button: FC<ButtonProps> = ({size, primary, disabled, text, onClick, ...props}) => {
    return (
        <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
            {text}
        </StyledButton>
        // <button></button>
    )
}

export default Button;