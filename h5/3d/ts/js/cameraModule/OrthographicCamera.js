var OrthographicCamera = /** @class */ (function () {
    function OrthographicCamera() {
        this.pos = new Laya.Vector3(310, 500, 0);
        this._translate = new Laya.Vector3(0, 0, 0);
        Laya3D.init(1024, 768);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        var dialog = Laya.stage.addChild(new Laya.Image("../../res/cartoon2/background.jpg"));
        var scene = Laya.stage.addChild(new Laya.Scene3D());
        var camera = scene.addChild(new Laya.Camera(0, 0.1, 1000));
        camera.transform.rotate(new Laya.Vector3(-45, 0, 0), false, false);
        camera.transform.translate(new Laya.Vector3(5, -10, 1));
        camera.orthographic = true;
        //正交投影垂直矩阵尺寸
        camera.orthographicVerticalSize = 10;
        var directionLight = scene.addChild(new Laya.DirectionLight());
        Laya.Sprite3D.load("../../res/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh", Laya.Handler.create(this, function (layaMonkey) {
            scene.addChild(layaMonkey);
            layaMonkey.transform.localScale = new Laya.Vector3(0.3, 0.3, 0.3);
            //转换2D屏幕坐标系统到3D正交投影下的坐标系统
            camera.convertScreenCoordToOrthographicCoord(this.pos, this._translate);
            layaMonkey.transform.position = this._translate;
            Laya.stage.on(Laya.Event.RESIZE, this, function () {
                camera.convertScreenCoordToOrthographicCoord(this.pos, this._translate);
                layaMonkey.transform.position = this._translate;
            });
        }));
    }
    return OrthographicCamera;
}());
new OrthographicCamera;
