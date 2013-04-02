App.views.LoginForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function() {
        var cancelButton,resetButton, config;

        cancelButton = {
            text: '<<',
            ui: 'back',
            handler:function(){
              Ext.dispatch({ controller: 'Main', action: 'index' });
            },
            scope: this
        };

        registerButton = {
            id: 'loginFormRegisterButton',
            text: 'Registrarse',
            ui: 'drastic',
            scope: this
        };

        resetButton = {
            id: 'loginFormResetButton',
            text: 'Limpiar',
            ui: 'drastic',
            scope: this
        };

        config = {
            scroll: 'vertical',
            fullscreen: true,
            url: 'login',
            xtype: 'formpanel',
            items: [
                {
                  xtype: 'fieldset',
                  items:[ 
                        { xtype: 'textfield',
                          label: 'Usuario:',
                          placeHolder: 'username',
                          clearIcon: true,
                          required: true,
                          name: 'username' },
                        { xtype: 'passwordfield',
                          label: 'Contrase&ntildea:',
                          required: true,
                          clearIcon: true,
                          placeHolder: '**************',
                          name: 'password' },
                        { xtype: 'button',
                          id: 'loginFormLoginButton',
                          style: 'margin: 2.1em',
                          ui: 'confirm',
                          centered: true,
                          text: 'Entrar',
                          handler: function() {
                                    //var cmp = Ext.getCmp('container'); 
                                    //cmp.getParent().setMasked({
                                        //xtype:'loadMask',
                                        //message:'Loading...'
                                        
                                      //});
                                     var frm = App.views.loginForm.getValues();
                                     Ext.dispatch({ controller: 'UserSessions', 
                                                    action: 'authenticate',
                                                    username: frm.username,
                                                    password: frm.password});
                                   }
                        }
                        ]
                }
                ],
            dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                title: 'Iniciar Sesi&oacute;n',
                items: [ cancelButton ]
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                items: [
                    resetButton ,
                    { xtype: 'spacer'},
                    registerButton
                    ]
            }]
        };

        Ext.apply(this, config);
        App.views.LoginForm.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.LoginForm', App.views.LoginForm);
