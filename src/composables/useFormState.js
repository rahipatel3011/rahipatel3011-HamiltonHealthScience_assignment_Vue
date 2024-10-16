import { reactive } from 'vue'

export const useFormState = () => {
  return reactive({
    firstName: '',
    lastName: '',
    dob: '',
    hcn: '',
    gender: '',
    firstNameError: '',
    lastNameError: '',
    dobError: '',
    hcnError: '',
    genderError: '',
  })
}
