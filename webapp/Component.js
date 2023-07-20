sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "./model/models",
], function(UIComponent, ResourceModel, models) {
    return UIComponent.extend("sap.ui.demo.bulletinboard.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createDeviceModel(), "device");
            this.getRouter().initialize();
        }
    });
});