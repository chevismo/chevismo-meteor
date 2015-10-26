let resetPassword = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      newPassword: {
        required: true,
        minlength: 6
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]'
      }
    },
    messages: {
      newPassword: {
        required: "Escribe una nueva contraseña.",
        minlength: "Usa al menos 6 caracteres, por favor."
      },
      repeatNewPassword: {
        required: "Repite la nueva contraseña.",
        equalTo: "¡Las contraseñas no coinciden!"
      }
    },
    submitHandler() { _handleReset( template ); }
  };
};

let _handleReset = ( template ) => {
  var token    = FlowRouter.current().params.token,
      password = template.find( '[name="newPassword"]' ).value;

  Accounts.resetPassword( token, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Contraseña restablecida.', 'success' );
    }
  });
};

Modules.client.resetPassword = resetPassword;
