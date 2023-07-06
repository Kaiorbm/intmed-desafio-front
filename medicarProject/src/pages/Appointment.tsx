import Button from "../components/Button"
import MedicarLogo from "../components/MedicarLogo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'


import S from '../styles/styles-consulta'
import { useEffect, useState } from "react"
import { getAppointments, getDoctors, getSpecialties, getConsultations, postConsultations } from "../utils/medicarApi"
import Modal from "../components/Modal"
import { AppointmentProps, AppointmentsProps, ConsultationProps, ConsultationsProps, SpecialtieProps, SpecialtiesProps, DoctorProps, DoctorsProps } from "../utils/types"
import Select from "../components/Select"

export default function Appointment() {
    const [doctors, setDoctors] = useState<DoctorsProps>();
    const [appointments, setAppointments] = useState<AppointmentsProps>();
    const [specialties, setSpecialties] = useState<SpecialtiesProps>();
    const [consultations, setConsultations] = useState<ConsultationsProps>();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [defaultSpecialty, setDefaultSpecialty] = useState<string>();
    const [defaultDoctor, setDefaultDoctor] = useState<string>();
    const [defaultSchedule, setDefaultSchedule] = useState<string>();
    const [defaultTime, setDefaultTime] = useState<string>();

    useEffect(() => {
        const callData = async () => {
            try {
                const consultations = await getConsultations()
                const doctors = await getDoctors()
                const appointments = await getAppointments()
                const specialties = await getSpecialties()
                setConsultations(consultations)
                setDoctors(doctors);
                setAppointments(appointments);
                setSpecialties(specialties);
            } catch (error) {
                console.error(error);
            }
        }
        callData()
    }, [])

    useEffect(() => {
        setDefaultDoctor('');
    },[defaultSpecialty])

    async function handleForm() {
        try {
            if (defaultSpecialty !== undefined && defaultDoctor !== undefined && defaultSchedule !== undefined && defaultTime !== undefined) {
                try {
                    return await postConsultations({defaultSpecialty, defaultDoctor, defaultSchedule, defaultTime});
                } catch (error) {
                    console.error(error);
                }
            }
            return alert('Existem campos não selecionados')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <S.Container>
            <S.AppointmentContainer>
                <S.AppointmentNavbar>
                    <MedicarLogo />
                    <S.NavbarMenu>
                        <p>Tiago Montes</p>
                        <Button outline={false} isLarge='small' handleFunction={() => window.location.replace('/')}>
                            Desconectar
                        </Button>
                    </S.NavbarMenu>
                </S.AppointmentNavbar>

                <S.Appointment>
                    <S.AppointmentHeader>
                        <h1>Consulta Clínica</h1>
                        <Button outline={true} handleFunction={() => setShowModal(true)} isLarge='medium'>
                            <FontAwesomeIcon icon={faPlus} />
                            Nova Consulta
                        </Button>
                    </S.AppointmentHeader>
                    <S.AppointmentTitle>
                        <li>ESPECIALIDADE</li>
                        <li>PROFISSIONAL</li>
                        <li>DATA</li>
                        <li>HORA</li>
                    </S.AppointmentTitle>
                    {consultations && consultations.map((consultation: ConsultationProps, index) => (
                        <S.AppointmentInfo key={consultation.id} isOutline={index % 2 === 0 ? false : true}>
                            <li>{consultation.medico.especialidade.nome}</li>
                            <li>{consultation.medico.nome}</li>
                            <li>{consultation.dia}</li>
                            <li>{consultation.horario}</li>
                            <Button isLarge="small">
                                <FontAwesomeIcon icon={faX} />
                                Desmarcar
                            </Button>
                        </S.AppointmentInfo>
                    ))}
                    <Modal showModal={showModal} title="Nova Consulta">
                        <S.FormContainer>
                            {specialties && (
                                <S.ModalInputs>
                                    <Select name="especialidade" onClick={(e) => setDefaultSpecialty((e.target as HTMLSelectElement).value)}>
                                        <option value="" disabled selected>Especialidade</option>
                                        {specialties.map((specialtie: SpecialtieProps) => (
                                            <option key={specialtie.id} value={specialtie.nome}>{specialtie.nome}</option>
                                        ))}
                                    </Select>
                                    <Select name="doctor" onClick={(e) => setDefaultDoctor((e.target as HTMLSelectElement).value)}>
                                        <option value="" disabled selected>Médico</option>
                                        {doctors && doctors.map((doctor: DoctorProps) => (
                                            doctor.especialidade.nome === defaultSpecialty && (
                                                <option key={doctor.id} value={doctor.nome}>{doctor.nome}</option>
                                            )
                                        ))}
                                    </Select>
                                    <Select name="data" onClick={(e) => setDefaultSchedule((e.target as HTMLSelectElement).value)}>
                                        <option value="" disabled selected>Data</option>
                                        {appointments && appointments.map((appointment: AppointmentProps) => (
                                            appointment.medico.nome === defaultDoctor && (
                                                <option key={appointment.id} value={appointment.dia}>{appointment.dia}</option>
                                            )
                                        ))}
                                    </Select>
                                    <Select name="hora" onClick={(e) => setDefaultTime((e.target as HTMLSelectElement).value)}>
                                        <option value="" disabled selected>Hora</option>
                                        {appointments && appointments.map((appointment: AppointmentProps) => (
                                            appointment.medico.nome === defaultDoctor && appointment.dia === defaultSchedule && (
                                                appointment.horarios.map((time: string, index) => (
                                                    <option key={index} value={time}>{time}</option>
                                                ))
                                            )
                                        ))}
                                    </Select>
                                </S.ModalInputs>
                            )}
                            <S.ContainerButtons>
                                <Button handleFunction={() => setShowModal(false)}>
                                    Cancelar
                                </Button>
                                <Button outline handleFunction={handleForm}>Confirmar</Button>
                            </S.ContainerButtons>
                        </S.FormContainer>
                    </Modal>
                </S.Appointment>
            </S.AppointmentContainer>
        </S.Container>
    )
}