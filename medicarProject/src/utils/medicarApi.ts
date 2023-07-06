import { PostConsultaProps, RegisterProps } from "./types"

type LoginProps = {
    username: string
    password: string
}

export async function login({username, password} : LoginProps) {
  return fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
  })
  .then(async res => {
    if (res.status === 401 || res.status === 500) {
      window.location.replace('/')
    }
    if (res.status === 200) {
      window.location.replace('/consulta')
    }
  })
}

export async function register({ username, password, email }: RegisterProps) {
  return fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
      "email": email
    }),
  })
  .then(async res => {
    if (res.status === 401 || res.status === 500) {
      window.location.replace('/NUM_REGISTRO')
    }
    if (res.status === 201) {
      window.location.replace('/consulta')
    }
  })
}

export async function getDoctors() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/medicos`, {
    method: 'GET',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    }
  })
  const data = res.json()
  return await data
}

export async function getAppointments() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/agendas`, {
    method: 'GET',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return await data
}

export async function getSpecialties() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/especialidades`, {
    method: 'GET',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return await data
}

export async function getConsultations() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/consultas`, {
    method: 'GET',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return await data
}

export async function postConsultations({ defaultSpecialty, defaultDoctor, defaultSchedule, defaultTime }: PostConsultaProps) {
  return fetch(`${import.meta.env.VITE_API_URL}/consultas`, {
    method: 'POST',
    headers: {
      'authorization': `Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "especialidade": defaultSpecialty,
      "medico": defaultDoctor,
      "data": defaultSchedule,
      "hora": defaultTime
    }),
  })
}