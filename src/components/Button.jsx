import React from 'react'
import * as S from '../styles'

const Button = ({ children }) => {
    return (
        <S.StyledButton>{children}</S.StyledButton>
    )
}

export default Button