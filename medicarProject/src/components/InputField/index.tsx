import S from './styles.modules'

type InputFieldProps = {
    name: string
    type: string
    placeholder?: string
    children?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({ name ,type, placeholder, children, onChange} : InputFieldProps) {
    return (
        <div>
            <S.Label>
                <S.Input name={name} type={type} placeholder={placeholder} onChange={onChange}/>
                {children}
            </S.Label>
       </div> 
    )
}