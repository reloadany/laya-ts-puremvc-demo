class ImageMediator extends puremvc.Mediator {
    constructor() {
        super(...arguments);
        this.currentIndex = -1;
        this.imageList = null;
    }
    listNotificationInterests() {
        //中介器需要监听的消息列表
        return [
            NotificationNames.LOAD_COMPLETE,
            NotificationNames.PAGE_NEXT,
            NotificationNames.PAGE_PREV
        ];
    }
    ;
    handleNotification(notification) {
        //当收到了来自proxy（数据层）或者mediator（界面上其他UI）发来的消息之后 做对应界面上修改处理
        switch (notification.getName()) {
            case NotificationNames.LOAD_COMPLETE:
                this.imageList = notification.getBody();
                this.currentIndex = 0;
                this.change();
                break;
            case NotificationNames.PAGE_NEXT:
                this.currentIndex++;
                if (this.currentIndex > this.imageList.length - 1)
                    this.currentIndex = 0;
                this.change();
                break;
            case NotificationNames.PAGE_PREV:
                this.currentIndex--;
                if (this.currentIndex < 0)
                    this.currentIndex = this.imageList.length - 1;
                this.change();
                break;
        }
    }
    change() {
        //根据index去获取图片信息
        this.viewComponent.image.skin = this.imageList[this.currentIndex].url;
        this.viewComponent.nameLabel.text = this.imageList[this.currentIndex].name;
    }
    ;
}
ImageMediator.NAME = 'imagemediator';
//# sourceMappingURL=ImageMediator.js.map