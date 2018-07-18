class BtnMediator extends puremvc.Mediator{
    static NAME:string = 'btnmediator';

    constructor(mediatorName:string = null, viewComponent:Object = null){
        //构造函数
        //执行父类的构造函数
        super(mediatorName,viewComponent);
        
        //监听按钮事件同时派发notification
        (this.viewComponent.btnNext as laya.ui.Button).on(Laya.Event.CLICK, this, function(){
            this.sendNotification(NotificationNames.PAGE_NEXT);
        });
        (this.viewComponent.btnPrev as laya.ui.Button).on(Laya.Event.CLICK, this, function(){
            this.sendNotification(NotificationNames.PAGE_PREV);
        });
    }
    

}