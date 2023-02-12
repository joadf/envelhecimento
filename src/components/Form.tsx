'use client'

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { formSchema, mappedWhereStatus } from '../app/validation/FormValidation';

type Inputs = {
    name: string;
    phone: string;
    where: string;
}

const handlePhone = (event: any) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

export function Form() {

    const router = useRouter();

    const [hasSubmited, setHasSubmited] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch
    } = useForm<Inputs>({
        defaultValues: {
            name: '',
            phone: '',
            where: '',
        },
        resolver: zodResolver(formSchema),
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        
        try {

            setHasSubmited(true);

            const response = await fetch(
                `https://lp.joandrade.com/api/cadastro`,
                {
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST'
                }
            );

            if (response.status === 201) {
                
                const json = await response.json();

                console.log(json);

                router.push('/obrigada')

            }

            if (response.status >= 400) {
                console.log(response.status);
                console.log(response);
            }

        } catch (error) {
            console.log(error);
        }
        
    }

    const whereOptions = Object.entries(mappedWhereStatus).map
    (
        ([value, label]) => (
            <option value={ value } key={ value }>
                { label }
            </option>
        )
    )

    return (
      <form className="cta-form" name="sign-up" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Nome completo</label>
            <input
                id="name"
                type="text"
                placeholder="Maria da Silva"
                disabled={ isSubmitting || hasSubmited }
                { ...register('name') }
            />
            { errors.name?.message && <div className='error-message'>{ errors.name?.message }</div> }
        </div>

        <div>
            <label htmlFor="phone">Telefone</label>
            <input
                id="phone"
                type="phone"
                placeholder="(41) 99999-9999"
                disabled={ isSubmitting || hasSubmited }
                { ...register('phone') }
                onKeyUp={ handlePhone }
                maxLength={15}
            />
            { errors.phone?.message && <div className='error-message'>{ errors.phone?.message }</div> }
        </div>

        <div>
            <label htmlFor="where">
                De onde você me conhece?
            </label>
            <select
                id="where"
                disabled={ isSubmitting || hasSubmited }
                { ...register('where') }
            >
                { whereOptions }
            </select>
            { errors.where?.message && <div className='error-message'>{ errors.where?.message }</div> }
        </div>

        <button
            type="submit"
            className="btn--submit btn--form margin-right-sm"
            disabled={ isSubmitting || hasSubmited }
        >
            {isSubmitting || hasSubmited ? "Agendando..." : "Agendar avaliação!" }
        </button>

        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  )
}
