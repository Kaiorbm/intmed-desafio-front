import React from 'react'
import S from './styles.modules'

type ButtonProps = {
    children: React.ReactNode
    outline?: boolean
    disable?: boolean
    isLarge?: string
    handleFunction?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, outline = false, disable = false, isLarge = 'large', handleFunction }: ButtonProps) {
    
    return (
        <>
            {disable ? (
                <S.ButtonDisable isOutline={outline} isLarge={isLarge} disabled>
                    {children}
                </S.ButtonDisable>
            ) : (
                <S.Button isOutline={outline} onClick={handleFunction} isLarge={isLarge}>
                    {children}
                </S.Button>
            )}
        </>
    )
}