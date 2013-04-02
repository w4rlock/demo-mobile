App.views.RegisterForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function() {
        var buttonbar, resetButton, titlebar, registerButton, config;
        cancelButton = {
            text: '<<',
            ui: 'back',
            handler:function(){
              Ext.dispatch({ controller: 'UserSessions', action: 'new' });
            },
            scope: this
        };
        titlebar = {
            id: 'configFormTitlebar',
            xtype: 'toolbar',
            title: 'Nuevo Usuario',
            items: [ cancelButton ]
        };
        resetButton = {
            id: 'registerResetButton',
            text: 'Limpiar',
            ui: 'drastic',
            handler:function(){
              Ext.dispatch({controller: 'RegisterController', action: 'cleanForm' });
            },
            scope: this
        };
        buttonbar = {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [ resetButton ]
        };
        
        config = {
            scroll: 'vertical',
            fullscreen: true,
            url: 'register',
            dockedItems: [ titlebar, buttonbar ],
            xtype: 'formpanel',
            items: [
                {
                  xtype: 'fieldset',
                  titlebar: '',
                  defaults:{ labelWidth: '20%'},
                  items:[ 
                        { xtype: 'textfield',
                          label: 'Usuario:',
                          required: true,
                          clearIcon: true,
                          placeHolder: 'username',
                          name: 'username' },
                        { xtype: 'passwordfield',
                          required: true,
                          clearIcon: true,
                          label: 'Contrase&ntildea:',
                          placeHolder: '**************',
                          name: 'password' },
                        { xtype: 'textfield',
                          required: true,
                          clearIcon: true,
                          label: 'Direcci&oacute;n:',
                          placeHolder: 'Barrio,calle,n&uacute;mero,mza,dpto',
                          name: 'address' },
                        { xtype: 'button',
                          ui: 'confirm',
                          style: 'margin: 2.1em',
                          text: 'Guardar',
                          handler: function() {
                                     Ext.dispatch({ controller: 'RegisterController', action: 'save' });
                                   }
                        }
                        ]
                }
        ]
        };

        Ext.apply(this, config);
        App.views.RegisterForm.superclass.initComponent.call(this);
    }
});

    
Ext.reg('App.views.RegisterForm', App.views.RegisterForm);
