
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

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


type labelProps = {
    type: string;
    children: React.ReactNode; 
    nome?: string  
};

  
  const LabelMain = ({type, children }: labelProps) =>{

    const {register, formState:{errors}} = useForm<CreateUserFormData>({
      resolver: zodResolver(createLoginUserFormSchema),
    });
    

    const [valor, setValor] = useState(false)
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState();
    

    const handleFocus = () => {
        setValor(true)
        
    }
    
    const handleNotFocus = () => {
      if( !search )
        setValor(false)        
    }  

    const handleClick = () => {
      setClick(!click)
    }    

    return (
        <label className='relative w-4/5'
          >        
          <input 
          onClick={handleFocus}        
          className='w-full rounded px-2 pt-6 pb-1 text-menor bg-slate-200'                             
          type={type}   
          value={search}                           
          {...register('nome')}  
          onBlur={ handleNotFocus}
          onChange={({target})=> setSearch(target.value)}             
          />   
          <button 
          onClick={handleClick}          
          className={`z-1 absolute right-5 top-5 ${ valor ? 'flex' : 'hidden'}`}>
            { click ? <AiFillEye/> : <AiFillEyeInvisible/>}
          </button>         
          <span          
          className={`absolute z-2 text-pequeno font-bold text-gray-400 ${ valor ? 'top-1 left-1 ease-in duration-75' : 'left-3 top-4 duration-75'}`}>{children}</span>      
                  
          {errors.nome && <span>{errors.nome.message} </span>}
        </label>
    )

  }

export default LabelMain  