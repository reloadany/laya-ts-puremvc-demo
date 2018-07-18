class ApplicationFacade extends puremvc.Facade
{
    initializeController():void
    {
        super.initializeController();
        //初始化controller并且建立notification和command映射 收到notification后会实例化command
        this.registerCommand(NotificationNames.STARTUP, StartupCommand);
        this.registerCommand(NotificationNames.STARTUP_OVER,GetListCommand);  
    }

    startup(view):void
    {
        //发送notification 由于初始化的时候已经建立好映射，则会实例化StartupCommand
        this.sendNotification(NotificationNames.STARTUP, view);
    }

    static getInstance():ApplicationFacade
    {
        //创建facade单例
        if(!this.instance)
            this.instance = new ApplicationFacade();
        return <ApplicationFacade> this.instance;
    }
}
