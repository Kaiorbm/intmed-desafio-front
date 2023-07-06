export type DoctorsProps = [
    medicos: DoctorProps
]

export type AppointmentsProps = [
    agendas: AppointmentProps
]

export type SpecialtiesProps = [
    especialidades: SpecialtieProps
]

export type ConsultationsProps = [
    consultas: ConsultationProps
]

export type DoctorProps = {
    id: number
    crm: number
    nome: string
    especialidade: {
        id: number
        nome: string
    }
}

export type AppointmentProps = {
    id: number
    medico: DoctorProps
    dia: string
    horarios: string[]
}

export type SpecialtieProps = {
    id: number
    nome: string
}

export type ConsultationProps = {
    id: number
    dia: string
    horario: string
    data_agendamento: string
    medico: DoctorProps
}

export type PostConsultaProps = {
    defaultSpecialty: string
    defaultDoctor: string
    defaultSchedule: string
    defaultTime: string
}

export type RegisterProps = {
    username: string
    password: string
    email: string
}