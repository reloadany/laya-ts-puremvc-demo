// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(1334,750);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //加载UI资源
        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(null, onLoaded));
        function onLoaded(){
            //实例UI界面
            var view: ui.showUI = new ui.showUI();
            Laya.stage.addChild(view);

            //获得Facade实例并且调用startup启动框架
            ApplicationFacade.getInstance().startup(view);
        }
    }
}
new GameMain();