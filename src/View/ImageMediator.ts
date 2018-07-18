class ImageMediator extends puremvc.Mediator{
    static NAME:string = 'imagemediator';
    private currentIndex:number = -1;
    private imageList:ImageVO[] = null;

    listNotificationInterests():string[]{
        //中介器需要监听的消息列表
        return [
            NotificationNames.LOAD_COMPLETE,
            NotificationNames.PAGE_NEXT,
            NotificationNames.PAGE_PREV
        ];
    };
    
    handleNotification(notification:puremvc.INotification):void{
        //当收到了来自proxy（数据层）或者mediator（界面上其他UI）发来的消息之后 做对应界面上修改处理
        switch(notification.getName()){  
            case NotificationNames.LOAD_COMPLETE://初始化
                this.imageList = notification.getBody() as ImageVO[];
                this.currentIndex = 0;
                this.change();
            break;
            case NotificationNames.PAGE_NEXT://下一页
                this.currentIndex ++;
                if(this.currentIndex > this.imageList.length-1)
                    this.currentIndex = 0;
                this.change();
            break;
            case NotificationNames.PAGE_PREV://上一页
                this.currentIndex --;
                if(this.currentIndex < 0)
                    this.currentIndex = this.imageList.length-1;
                this.change();
            break;
        }
    }
    
    private change():void{
        //根据index去获取图片信息
        (this.viewComponent.image as laya.ui.Image).skin = this.imageList[this.currentIndex].url;
        (this.viewComponent.nameLabel as laya.ui.Label).text = this.imageList[this.currentIndex].name;
    };
}