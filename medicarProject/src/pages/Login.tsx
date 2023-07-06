import { useState } from "react"
import Button from "../components/Button"
import InputField from "../components/InputField"
import MedicarLogo from "../components/MedicarLogo"

import S from '../styles/styles-login'
import { login } from "../utils/medicarApi"

export default function Login() {
    const [disable, setDisable] = useState<boolean>(true);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisable(true);

        const target = e.target as HTMLFormElement;

        const username = target.username.value;
        const password = target.password.value;
        try {
            await login({ username, password });
        } catch (error) {
            console.error(error);
        }
    }

    function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        let newUsername = username;
        let newPassword = password;
        if (name === 'username') {
            setUsername(value);
            newUsername = value;
        } else if (name === 'password') {
            setPassword(value);
            newPassword = value;
        }
        setDisable(newUsername.length === 0 || newPassword.length === 0);
    }

    function handleRegister() {
        window.location.replace('/register')
    }

    return (
        <S.Container>
            <S.ContainerLogin>
                <MedicarLogo />
                <form onSubmit={handleSubmit}>
                    <S.ContainerInput>
                        <InputField name='username' type="text" placeholder="Email ou Login" onChange={(e) => handleInputValue(e)}/>
                        <InputField name='password' type="password" placeholder="Senha" onChange={(e) => handleInputValue(e)}/>
                    </S.ContainerInput>

                    <S.ContainerCheckbox>
                        <InputField name="checkbox" type="checkbox">
                            Lembrar minha senha
                        </InputField>
                    </S.ContainerCheckbox>

                    <S.ContainerButtons>
                        <Button handleFunction={handleRegister} isLarge="large">
                            Criar Conta
                        </Button>
                        <Button outline={true} isLarge="large" type="submit" disable={disable} handleFunction={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.value}>
                            Acessar
                        </Button>
                    </S.ContainerButtons>
                </form>
            </S.ContainerLogin>
        </S.Container>
    );
}
