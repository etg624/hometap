export const formAttributes = formData => [
  {
    id: 'firstName',
    placeholder: 'John',
    value: formData.firstName || '',
    name: 'firstName',
    label: 'First Name',
  },
  {
    id: 'lastName',
    placeholder: 'Doe',
    value: formData.lastName || '',
    name: 'lastName',
    label: 'Last Name',
  },
  {
    id: 'email',
    placeholder: 'johndoe@john.com',
    value: formData.email || '',
    name: 'email',
    label: 'Email Name',
  },
  {
    id: 'phoneNumber',
    placeholder: '(555)555-5555',
    value: formData.phoneNumber || '',
    name: 'phoneNumber',
    label: 'Phone Number',
  },
  {
    id: 'city',
    placeholder: 'i.e Los Angeles',
    value: formData.city || '',
    name: 'city',
    label: 'City',
  },
  {
    id: 'state',
    placeholder: 'i.e CA',
    value: formData.state || '',
    name: 'state',
    label: 'State',
  },
  {
    id: 'zip',
    placeholder: 'i.e 90013',
    value: formData.zip || '',
    name: 'zip',
    label: 'Zip Code',
  },
]
