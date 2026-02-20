// хук для управлениея формой
// поддерживает initialValues, валидацию, onSubmit

// Пример использования
const form = useForn({
  initialValues: { email: '', password: '' },
  validate: values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Обязательно'
      return errors
    }
  },
  onSubmit: values => console.log(values)
})
