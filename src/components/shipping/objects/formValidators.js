export const nameValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su nombre"
  },
  minLength: {
    value: 3,
    message: "* Ingrese un nombre mayor a 2 caracteres"
  },
  pattern: {
    value: /^[a-záéíóúñ '-]+$/i,
    message: "* Porfavor ingrese un nombre válido"
  }
}

export const lastNameValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su apellido"
  },
  minLength: {
    value: 3,
    message: "* Ingrese un apellido mayor a 2 caracteres"
  },
  pattern: {
    value: /^[a-záéíóúñ '-]+$/i,
    message: "* Porfavor ingrese un apellido válido"
  }
}

export const emailValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su correo"
  },
  minLength: {
    value: 3,
    message: "* Porfavor ingrese un correo válido"
  },
  pattern: {
    value: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "* Porfavor ingrese un correo válido"
  }
}

export const phoneNumberValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su número telefónico"
  },
  pattern: {
    value: /^(9)*([0-9]*){9}/i,
    message: "* Porfavor ingrese un apellido válido"
  }
}

export const addressValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su dirección"
  }
}

export const cityValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su ciudad de residencia"
  }
}

export const stateValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su provincia de residencia"
  }
}

export const postalCodeValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su código postal"
  },
    pattern: {
    value: /(([1-4][0-9][0-9][0-9][0-9])|(0(?=[1-9][0-9][0-9][0-9]))|(5(?=[0-2][0-9][0-9][0-9])))/,
    message: "* Porfavor ingrese un código postal válido"
  }
}

export const creditCardValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su número de tarjeta"
  },
    pattern: {
    value: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    message: "* Porfavor ingrese un número válido"
  }
}

export const CVVValidator = {
  required: {
    value: true,
    message: "* Porfavor ingrese su número de CVV"
  },
    pattern: {
    value: /^([0-9][ -]*){3}/i,
    message: "* Porfavor ingrese un CVV válido"
  }
}

