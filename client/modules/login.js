let login = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      emailAddress: {
        required: 'Se necesita un email.',
        email: '¿Es correcto este email?'
      },
      password: {
        required: 'Se necesita una contraseña.'
      }
    },
    submitHandler() { _handleLogin( template ); }
  };
};

let _handleLogin = ( template ) => {
  let email    = template.find( '[name="emailAddress"]' ).value,
      password = template.find( '[name="password"]' ).value;

  Meteor.loginWithPassword( email, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'Sesión iniciada', 'success' );
    }
  });
};

Modules.client.login = login;
