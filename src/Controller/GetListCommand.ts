class GetListCommand extends puremvc.SimpleCommand
{
	execute(notification:puremvc.INotification):void
	{
        //框架构建成功后则去加载图片列表
		(this.facade.retrieveProxy(ImageListProxy.NAME) as ImageListProxy).loadList();
	}
}