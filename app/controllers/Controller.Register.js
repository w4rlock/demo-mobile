Ext.regController('RegisterController', {
    cleanForm : function() {
         App.views.registerForm.reset();
    },
    
    save: function() {
        console.log("Controller.Sessions.save");
        var values = App.views.registerForm.getValues();
        Ext.Msg.alert(values.username,'asda');
        Ext.Msg.alert(values.password,'asda');


        
        data.authToken = this.getAuthToken();

        record.set(data);
        var errors = record.validate();

        if (errors.isValid()) {
            this.store.create(data);
            console.log("Controller.Sessions.save login success");

            Ext.dispatch({
                controller: 'Main',
                action: 'index'
            });
            
        } else {
            console.log("Controller.Sessions.save login failed");
            form.showErrors(errors);
        }
        
    },
});
