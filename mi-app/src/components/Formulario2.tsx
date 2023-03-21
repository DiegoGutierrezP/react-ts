import { useForm } from '../hooks/useForm';

export const Formulario2 = () => {

    const { postal,ciudad,formulario, handleChange } = useForm({
        postal:'123',
        ciudad:'otavio',
    },50);

    

  return (
    <form autoComplete='off' > 
        <div className="mb-3">
            <label className='form-label'>Codigo Postal:</label>
            <input type="text" value={postal} onChange={handleChange} className='form-control' name='postal' />
        </div>
        <div className="mb-3">
            <label className='form-label'>Ciudad:</label>
            <input type="text" value={ciudad} onChange={handleChange} className='form-control' name='ciudad' />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>

    </form>
  )
}
