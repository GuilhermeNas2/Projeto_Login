import { AiOutlineArrowRight } from "react-icons/ai"

type ButtonProps  = {
    success?: boolean;
} 

interface ButtonMidiaProps {
    children: React.ReactNode;
    color: string;
}

export const ButtonOne = ({ success = false }:ButtonProps) => {
    return <button data-success={success}     
            className='flex justify-center mt-10 items-center rounded border-2 border-slate-200 w-20 h-20 text-slate-300'><AiOutlineArrowRight /></button>
}

export const ButtonSocial = ({children, color}: ButtonMidiaProps) => {
    return (
            <button className={`${color} rounded w-1/4 h-6 flex justify-center items-center`}>{children}</button>      
        
    )
}