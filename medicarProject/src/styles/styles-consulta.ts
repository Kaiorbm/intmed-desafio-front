import styled from 'styled-components'

type ConsultaProps = {
    isOutline?: boolean
    isLarge?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 20px;

    display: flex;    
    justify-content: center;

`

export const AppointmentContainer = styled.div`
    width: 100%;
    padding: 0px 370px;
`

export const AppointmentNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 18px 0;
`

export const NavbarMenu = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;

    p {
        color: #A8A8A8;
    }

    button {
        justify-content: end;
        font-size: 16px;
    }
`

export const Appointment = styled.div`
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    min-height: calc(100% - 112px);
    padding: 16px 8px;
`

export const AppointmentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AppointmentTitle = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    margin: 18px 0 2px 0;
    color: #A8A8A8;
    font-weight: bold;
    
    li:first-child {
        padding-left: 8px;
    }
`

export const AppointmentInfo = styled.div<ConsultaProps>`
    width: 100%;
    display: grid;
    background-color: ${(props) => 
    props.isOutline ?
        '#F8F8F8'
        :
        '#FFFFFF'
    };
    padding: 8px;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    margin-bottom: 8px;
`

export const FormContainer = styled.form`
    width: 100%;
`

export const ModalInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin-bottom: 40px;
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const styles = {
    Container,
    AppointmentContainer,
    AppointmentNavbar,
    NavbarMenu,
    Appointment,
    AppointmentHeader,
    AppointmentTitle,
    AppointmentInfo,
    ModalInputs,
    FormContainer,
    ContainerButtons
}

export default styles
