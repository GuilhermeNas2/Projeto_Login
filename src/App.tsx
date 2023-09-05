
import './index.css'
import FormMain from './components/form/formDesign';
import { AiOutlineExclamation } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { useState } from 'react';
import { MdWatchLater } from 'react-icons/md'


function App() {  

  const [on, setOn] = useState(false)
  const [menu, setMenu] = useState(false)

  console.log(on)

  return (
    <div className='flex w-full h-screen'>
      <div        
        className='flex flex-col items-center pt-10 gap-4 w-1/4 h-full bg-white'>
        <img className='max-w-1/3 w-full' src="/logo.png" alt="" />
        <FormMain></FormMain>              
        <div className='flex flex-col items-center w-2/3 mt-20 gap-4'>
          <div className='flex flex-col items-center'>
            <span className='opacity-30 font-bold text-base hover:opacity-100'><a href="">Não consegue iniciar sessão ?</a></span>
            <span className='opacity-30 font-bold text-base hover:opacity-100'><a href="">Criar conta</a></span>
          </div>
          <span className='opacity-30 font-bold text-base text-pequeno text-center'>ESTE APLICATIVO É PROTEGIDO POR HCAPTCHA. A POLÍTICA DE <a href='#'>PRIVACIDADE</a> E OS TERMOS DE SERVIÇO SÃO APLICÁVEIS</span>
        </div>
      </div>
      <div className='w-3/4 h-screen relative'>
        <div onClick={() => {
          setOn(!on)
        }} id='polgon'><AiOutlineExclamation /> 
        </div>
        <div className={`absolute w-1/4 h-3/7 bg-slate-50 top-1 left-24 flex-col p-8 gap-5 font-semibold ${ on ? 'flex' : 'hidden'} `}>
          <div className='flex flex-col gap-1'>
            <h2 className='text-lg'>Transferências de contas desabilitadas</h2>
            <span className='flex items-center gap-2 text-sm text-slate-500'><MdWatchLater/> 16/11/2023 10:15 </span>
            <p className='text-sm'>Desabilitamos as transferências de região enquanto corrigimos um erro.</p>
          </div>
          <div className='flex flex-col gap-1 mb-5'>
            <h2 className='text-lg'>Transferências de contas indisponíveis</h2>
            <span className='flex items-center gap-2 text-sm text-slate-500'><MdWatchLater/> 22/9/2023 14:46 </span>
            <p className='text-sm'>As tranferências de contas estão indisponíveis enquanto trabalharmos na solução de um problema.</p>
          </div>
          <div className='text-sm font-bold'><a href='#' className='text-slate-400 hover:text-slate-700 ease-in 2s'>MAIS DETALHES</a></div>
        </div>
        <div onClick={()=> {
          setMenu(!menu)
        }} id='box'><BiSolidUser/></div>
        <div className={`absolute w-1/6 h-1/5 top-4 right-24 bg-zinc-800 flex-col font-bold gap-3 p-7 text-slate-300 ${ menu ? 'flex' : 'hidden' }`}>
          <div className='w-grande rounded-sm p-2 hover:bg-slate-50/20'>
           <span className='cursor-pointer'>CONFIGURAÇÕES</span>
          </div>
          <div className='w-grande rounded-sm p-2 hover:bg-slate-50/20'>
           <span className='cursor-pointer text-sm '>ENCERRAR SESSÃO</span>
          </div>
          <div className='w-grande rounded-sm p-2 hover:bg-slate-50/20'>
            <span className='cursor-pointer '>SAIR</span>
          </div>
        </div>
        <img className='h-screen'
        src="/wallpaper.jpg" 
        alt="imagem ilustratica da vayne" />
      </div>
    </div>
  )
}

export default App
