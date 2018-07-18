class BtnMediator extends puremvc.Mediator {
    constructor(mediatorName = null, viewComponent = null) {
        //构造函数
        //执行父类的构造函数
        super(mediatorName, viewComponent);
        //监听按钮事件同时派发notification
        this.viewComponent.btnNext.on(Laya.Event.CLICK, this, function () {
            this.sendNotification(NotificationNames.PAGE_NEXT);
        });
        this.viewComponent.btnPrev.on(Laya.Event.CLICK, this, function () {
            this.sendNotification(NotificationNames.PAGE_PREV);
        });
    }
}
BtnMediator.NAME = 'btnmediator';
//# sourceMappingURL=BtnMediator.js.map