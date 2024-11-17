

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label className="name"> Nombre Completo </label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

            <label>Telefono</label>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <label>Email</label>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <label>Repita su email</label>
            <input type="email" name="repetirEmail" value={dataForm.email} onChange={handleChangeInput} />

            <button type="submit">Enviar mi orden</button>

        </form>
    </div>
)
}

export default FormCheckout
