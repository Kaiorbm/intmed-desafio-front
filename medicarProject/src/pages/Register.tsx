/* eslint-disable react-hooks/rules-of-hooks */
import MedicarLogo from "../components/MedicarLogo";
import InputField from "../components/InputField";
import { useNavigate } from 'react-router-dom';

import S from '../styles/styles-register'
import Button from "../components/Button";
import React, { useState } from "react";
import { register } from "../utils/medicarApi";

export default function Register() {
    const [disable, setDisable] = useState<boolean>(true);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();

    function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        let newUsername = username;
        let newPassword = password;
        let newEmail = email;
        let newConfirmPassword = confirmPassword;

        if (name === 'username') {
            setUsername(value);
            newUsername = value;
        } else if (name === 'password') {
            setPassword(value);
            newPassword = value;
        } else if (name === 'email') {
            setEmail(value);
            newEmail = value;
        } else if (name === 'confirm-password') {
            setConfirmPassword(value);
            newConfirmPassword = value;
        }
        setDisable(newUsername.length === 0 || newPassword.length === 0 || newEmail.length === 0 || newConfirmPassword.length === 0);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisable(true);

        const target = e.target as HTMLFormElement;

        const username = target.username.value;
        const password = target.password.value;
        try {
            await register({ username, password, email });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <S.Container>
            <form onSubmit={handleSubmit}>
                <S.ContainerRegister>
                <MedicarLogo />
                <h3>Crie sua conta</h3>
                <InputField name='username' type="text" placeholder="Nome" onChange={(e) => handleInputValue(e)}/>
                <InputField name='email' type="email" placeholder="Email" onChange={(e) => handleInputValue(e)}/>
                <InputField name='password' type="password" placeholder="Senha" onChange={(e) => handleInputValue(e)}/>
                <InputField name='confirm-password' type="password" placeholder="Confirmar Senha" onChange={(e) => handleInputValue(e)}/>
                </S.ContainerRegister>
                <S.ContainerButtons>
                    <Button handleFunction={() => navigate('/')} isLarge="larger">
                        Cancelar
                    </Button>
                    <Button outline={true} isLarge="larger" disable={disable}>
                        Confirmar
                    </Button>
                </S.ContainerButtons>
            </form>
        </S.Container>
    );
}