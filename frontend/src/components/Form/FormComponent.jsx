function FormComponent({children, onSubmitHandler, formStyling}) {
  return (
    <form onSubmit={onSubmitHandler} className= {formStyling}>
        {children}
    </form>
  )
}

export default FormComponent;

