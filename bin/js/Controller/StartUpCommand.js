class StartupCommand extends puremvc.SimpleCommand {
    execute(notification) {
        var view = notification.getBody();
        //注册代理
        this.facade.registerProxy(new ImageListProxy(ImageListProxy.NAME));
        //注册中介器  
        this.facade.registerMediator(new ImageMediator(ImageMediator.NAME, { image: view.image, nameLabel: view.nameLabel }));
        this.facade.registerMediator(new BtnMediator(BtnMediator.NAME, { btnNext: view.btnNext, btnPrev: view.btnPrev }));
        //通知已经初始化完毕  
        this.sendNotification(NotificationNames.STARTUP_OVER, view);
    }
}
//# sourceMappingURL=StartUpCommand.js.map