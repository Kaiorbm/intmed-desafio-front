import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerLogin = styled.div`
    width: 400px;
`

export const ContainerInput = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & input {
        width: 100%;
    }
`

export const ContainerCheckbox = styled.div`
    display: flex;
    margin: 8px 0 40px 0;
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const styles = {
    Container,
    ContainerLogin,
    ContainerInput,
    ContainerCheckbox,
    ContainerButtons
}

export default styles