class StartupCommand extends puremvc.SimpleCommand {
    execute(msg) {
        var view = msg.getBody();
        this.facade.registerProxy(new ImageListProxy(ImageListProxy.NAME));
        //注册中介器  
        this.facade.registerMediator(new ImageMediator(ImageMediator.NAME, { image: view.image, nameLabel: view.nameLabel }));
        // this.facade.registerMediator( new ControlBtnsMediator(  
        //             ControlBtnsMediator.NAME ,  
        //             {  
        //                 btnNext:app.btnNext,  
        //                 btnPrev:app.btnPrev  
        //             }  
        // ));  
        //通知已经初始化完毕  
        this.sendNotification(NotificationNames.STARTUP_OVER, view);
    }
}
//# sourceMappingURL=StartUpCommand.js.map