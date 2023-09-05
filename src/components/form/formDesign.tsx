import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonOne, ButtonSocial } from '../buttons/buttons';
import LabelMain from '../labels/labelsStyles';
import { useForm } from 'react-hook-form'
import { useState } from 'react';


const createLoginUserFormSchema = z.object({
  nome: z.string()    
    .nonempty('O nome é obrigatório')
    .transform(name => {
      return name.trim().split('').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join('')
    }),
  password: z.string()
    
    .min(6 , 'A senha deve conter no mínimo 6 caracteres')
  
})

type CreateUserFormData = z.infer<typeof createLoginUserFormSchema>

const FormMain = () => {

        const [output, setOutput] = useState('')

        
        const { handleSubmit} = useForm<CreateUserFormData>({
        resolver: zodResolver(createLoginUserFormSchema),
    });
    
    function loginUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    console.log(output)
    
        return(
            <div className='w-full flex flex-col items-center h-2/3'>
            <form className='w-3/4 flex flex-col justify-center items-center gap-4 my-5'
            onSubmit={handleSubmit(loginUser)}                  
            >
                <h1 className='font-bold text-2xl mb-5'>Fazer login</h1>
                <LabelMain type='name'>NOME DE USUÁRIO</LabelMain>             
                <LabelMain type='password'>SENHA</LabelMain>           
            <div className='flex w-4/5 gap-5 h-30'>
                <ButtonSocial color='bg-sky-600'><img className='object-contain w-3' src='/facebook-icon.png'></img></ButtonSocial>
                <ButtonSocial color='bg-slate-200'><img className='object-contain w-3' src='/google-icon.png'></img></ButtonSocial>
                <ButtonSocial color='bg-black'><img className='object-contain w-3' src='/apple-icon.png'></img></ButtonSocial>
                <ButtonSocial color='bg-sky-500'><img className='object-contain w-3' src='/facebook-icon.png'></img></ButtonSocial>
            </div>   
            <div className='w-4/5 mt-3 mb-20 flex gap-1 justify-start'>
                <input            
                type="checkbox" />
                <label className='font-semibold'>Manter login</label>
            </div>   
                <ButtonOne></ButtonOne>
            </form>         
            </div>  
        );
};

export default FormMain