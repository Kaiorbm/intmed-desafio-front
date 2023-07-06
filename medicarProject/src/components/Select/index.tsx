import React from 'react'
import S from './styles.modules'

type SelectProps = {
    children: React.ReactNode
    name: string
    onClick?: (event: React.MouseEvent<HTMLSelectElement>) => void;
}

export default function Select({children, name, onClick}: SelectProps) {
    return (
        <div>
            <S.Select name={name} onClick={onClick}>
                {children}
            </S.Select>
        </div> 
    )
}