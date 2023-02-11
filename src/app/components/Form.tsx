'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { formSchema, mappedWhereStatus } from '../validation/FormValidation';

type Inputs = {
    name: string;
    phone: string;
    where: string;
}

export function Form() {

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
        
        //await new Promise((resolve) => setTimeout(resolve, 5000))
        //console.log(data);

        try {

            const response = await fetch(
                `http://localhost:3001/api/cadastro`,
                {
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST'
                }
            );

            if (response.status >= 400) {
                // return res.status(400).json({
                //     error: 'There was an error'
                // });
            }

            const json = await response.json();

            console.log(json);
        
            // return res.status(200).json({ status: 'ok' });
        } catch (error) {
            // return res.status(500).json({
            //     error: 'There was an error'
            // });
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
                disabled={ isSubmitting }
                { ...register('name') }
            />
            { errors.name?.message && <div>{ errors.name?.message }</div> }
        </div>

        <div>
            <label htmlFor="phone">Telefone</label>
            <input
                id="phone"
                type="phone"
                placeholder="(41) 99999-9999"
                disabled={ isSubmitting }
                { ...register('phone') }
            />
            { errors.phone?.message && <div>{ errors.phone?.message }</div> }
        </div>

        <div>
            <label htmlFor="where">
                De onde você me conhece?
            </label>
            <select
                id="where"
                disabled={ isSubmitting }
                { ...register('where') }
            >
                { whereOptions }
            </select>
            { errors.where?.message && <div>{ errors.where?.message }</div> }
        </div>

        <button
            type="submit"
            className="btn btn--full margin-right-sm"
            disabled={ isSubmitting }
        >
            Agendar avaliação!
        </button>

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}
