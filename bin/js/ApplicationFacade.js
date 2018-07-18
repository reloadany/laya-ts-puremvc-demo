class ApplicationFacade extends puremvc.Facade {
    startup(view) {
        this.sendNotification(NotificationNames.STARTUP, view);
    }
    initializeController() {
        super.initializeController();
        this.registerCommand(NotificationNames.STARTUP, StartupCommand);
        this.registerCommand(NotificationNames.STARTUP_OVER, GetListCommand);
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new ApplicationFacade();
        return this.instance;
    }
}
//# sourceMappingURL=ApplicationFacade.js.map