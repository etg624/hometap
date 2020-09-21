export const formAttributes = formData => {
  return {
    firstName: {
      id: 'firstName',
      placeholder: 'John',
      value: formData.firstName,
      name: 'firstName',
      label: 'First Name',
    },
    lastName: {
      id: 'lastName',
      placeholder: 'Doe',
      value: formData.lastName,
      name: 'lastName',
      label: 'Last Name',
    },
    email: {
      id: 'email',
      placeholder: 'johndoe@john.com',
      value: formData.email,
      name: 'email',
      label: 'Email Name',
    },
    phoneNumber: {
      id: 'phoneNumber',
      placeholder: '(555)555-5555',
      value: formData.phoneNumber,
      name: 'phoneNumber',
      label: 'Phone Number',
    },
    address: {
      id: 'address',
      placeholder: '123 Main St',
      value: formData.address,
      name: 'address',
      label: 'Address',
    },
    city: {
      id: 'city',
      placeholder: 'i.e Los Angeles',
      value: formData.city,
      name: 'city',
      label: 'City',
    },
    zip: {
      id: 'zip',
      placeholder: 'i.e 90013',
      value: formData.zip,
      name: 'zip',
      label: 'Zip Code',
    },
    states: {
      attrs: {
        id: 'state',
        name: 'state',
        value: formData.state,
        placeholder: 'Select a state',
        label: 'State',
      },
      options: [
        { value: 'AK', text: 'Alaska' },
        { value: 'AL', text: 'Alabama' },
        { value: 'AR', text: 'Arkansas' },
        { value: 'AZ', text: 'Arizona' },
        { value: 'CA', text: 'California' },
        { value: 'CO', text: 'Colorado' },
        { value: 'CT', text: 'Connecticut' },
        { value: 'DE', text: 'Delaware' },
        { value: 'FL', text: 'Florida' },
        { value: 'GA', text: 'Georgia' },
        { value: 'GU', text: 'Guam' },
        { value: 'HI', text: 'Hawaii' },
        { value: 'IA', text: 'Iowa' },
        { value: 'ID', text: 'Idaho' },
        { value: 'IL', text: 'Illinois' },
        { value: 'IN', text: 'Indiana' },
        { value: 'KS', text: 'Kansas' },
        { value: 'KY', text: 'Kentucky' },
        { value: 'LA', text: 'Louisiana' },
        { value: 'MA', text: 'Massachusetts' },
        { value: 'MD', text: 'Maryland' },
        { value: 'ME', text: 'Maine' },
        { value: 'MI', text: 'Michigan' },
        { value: 'MN', text: 'Minnesota' },
        { value: 'MO', text: 'Missouri' },
        { value: 'MS', text: 'Mississippi' },
        { value: 'MT', text: 'Montana' },
        { value: 'NC', text: 'North Carolina' },
        { value: 'ND', text: 'North Dakota' },
        { value: 'NE', text: 'Nebraska' },
        { value: 'NH', text: 'New Hampshire' },
        { value: 'NJ', text: 'New Jersey' },
        { value: 'NM', text: 'New Mexico' },
        { value: 'NV', text: 'Nevada' },
        { value: 'NY', text: 'New York' },
        { value: 'OH', text: 'Ohio' },
        { value: 'OK', text: 'Oklahoma' },
        { value: 'OR', text: 'Oregon' },
        { value: 'PA', text: 'Pennsylvania' },
        { value: 'PR', text: 'Puerto Rico' },
        { value: 'RI', text: 'Rhode Island' },
        { value: 'SC', text: 'South Carolina' },
        { value: 'SD', text: 'South Dakota' },
        { value: 'TN', text: 'Tennessee' },
        { value: 'TX', text: 'Texas' },
        { value: 'UT', text: 'Utah' },
        { value: 'VA', text: 'Virginia' },
        { value: 'VT', text: 'Vermont' },
        { value: 'WA', text: 'Washington' },
        { value: 'WI', text: 'Wisconsin' },
        { value: 'WV', text: 'West Virginia' },
        { value: 'WY', text: 'Wyoming' },
      ],
    },
    products: {
      attrs: {
        id: 'products',
        name: 'products',
        value: formData.products,
        label: 'Select a product',
      },
      options: [
        { value: 'product-a', text: 'Product A' },
        { value: 'product-b', text: 'Product B' },
        { value: 'product-c', text: 'Product C' },
      ],
    },
  }
}
