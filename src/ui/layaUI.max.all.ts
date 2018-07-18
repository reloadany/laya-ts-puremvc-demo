
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class showUI extends View {
		public btnPrev:Laya.Button;
		public btnNext:Laya.Button;
		public image:Laya.Image;
		public nameLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"width":75,"var":"btnPrev","skin":"comp/button.png","sizeGrid":"10,20,10,20","left":50,"label":"prev","height":60,"centerY":0}},{"type":"Button","props":{"width":75,"var":"btnNext","skin":"comp/button.png","sizeGrid":"10,20,10,20","right":50,"label":"next","height":60,"centerY":0}},{"type":"Image","props":{"width":250,"var":"image","skin":"comp/image.png","height":250,"centerY":0,"centerX":0}},{"type":"Label","props":{"width":108,"var":"nameLabel","valign":"middle","text":"Name","overflow":"scroll","height":53,"fontSize":20,"color":"#ffffff","centerX":10,"bottom":10,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.showUI.uiView);

        }

    }
}
