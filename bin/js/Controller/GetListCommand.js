class GetListCommand extends puremvc.SimpleCommand {
    execute(notification) {
        //框架构建成功后则去加载图片列表
        this.facade.retrieveProxy(ImageListProxy.NAME).loadList();
    }
}
//# sourceMappingURL=GetListCommand.js.map