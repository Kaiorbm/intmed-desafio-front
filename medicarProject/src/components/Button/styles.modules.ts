import styled from "styled-components"

type ButtonProps = {
    isOutline?: boolean
    isLarge?: string
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    gap: 16px;

    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    width: ${(props) =>
        props.isLarge === 'large'
            ? '180px'
        : props.isLarge === 'medium'
            ? '140px'
        : props.isLarge === 'small'
            ? ''
        : ''
    };
    background-color: ${(props) =>
        props.isOutline
        ?
        '#49B4BB'
        :
        'rgba(0,0,0,0);'
    };
    color: ${(props) =>
        props.isOutline
        ?
        '#FFFFFF'
        :
        '#49B4BB'
    };
`

export const ButtonDisable = styled.button<ButtonProps>`
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #D4D4D4;
    color: #FFFFFF;
    width: ${(props) =>
        props.isLarge === 'large'
            ? '180px'
        : props.isLarge === 'medium'
            ? '140px'
        : props.isLarge === 'small'
            ? ''
        : null
    };
`

const styles = {
    Button,
    ButtonDisable
}

export default styles;