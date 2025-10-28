function FormComponent({children, onSubmitHandler}) {
  return (
    <form onSubmit={onSubmitHandler} className='space-y-6'>
        {children}
    </form>
  )
}

export default FormComponent;

