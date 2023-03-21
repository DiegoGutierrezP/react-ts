import { useForm } from '../hooks/useForm'

interface FormData {
    email:string;
    nombre: string;
    edad:number;
}

export const Formulario = () => {

    const { email,edad,nombre,formulario, handleChange,numero } = useForm<FormData>({
        email:'diego@gmail.com',
        nombre:'diego123',
        edad:22
    },45);

  return (
    <form autoComplete='off' > 
        <div className="mb-3">
            <label className='form-label'>Email:</label>
            <input type="email" value={email} onChange={handleChange} className='form-control' name='email' />
        </div>
        <div className="mb-3">
            <label className='form-label'>Nombre:</label>
            <input type="text" value={nombre} onChange={handleChange} className='form-control' name='nombre' />
        </div>
        <div className="mb-3">
            <label className='form-label'>Edad:</label>
            <input type="text" value={edad} onChange={handleChange} className='form-control' name='edad' />
        </div>

        <pre>{JSON.stringify(formulario)} {numero}</pre>

    </form>
  )
}
