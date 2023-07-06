import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;

    & input {
        width: 100%;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
`

const styles = {
    Container,
    ContainerRegister,
    ContainerButtons
}

export default styles