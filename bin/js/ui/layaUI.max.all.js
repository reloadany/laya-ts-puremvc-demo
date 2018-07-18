var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    class showUI extends View {
        constructor() { super(); }
        createChildren() {
            super.createChildren();
            this.createView(ui.showUI.uiView);
        }
    }
    showUI.uiView = { "type": "View", "props": { "width": 600, "height": 400, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Button", "props": { "width": 75, "var": "btnPrev", "skin": "comp/button.png", "sizeGrid": "10,20,10,20", "left": 50, "label": "prev", "height": 60, "centerY": 0 } }, { "type": "Button", "props": { "width": 75, "var": "btnNext", "skin": "comp/button.png", "sizeGrid": "10,20,10,20", "right": 50, "label": "next", "height": 60, "centerY": 0 } }, { "type": "Image", "props": { "width": 250, "var": "image", "skin": "comp/image.png", "height": 250, "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "width": 108, "var": "nameLabel", "valign": "middle", "text": "Name", "overflow": "scroll", "height": 53, "fontSize": 20, "color": "#ffffff", "centerX": 10, "bottom": 10, "align": "center" } }] };
    ui.showUI = showUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map