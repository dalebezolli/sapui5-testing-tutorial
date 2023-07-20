sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
], function(BaseController, JSONModel, formatter) {
    "use strict";

    return BaseController.extend("sap.ui.demo.bulletinboard.cotroller.Post", {
        formatter: formatter,
        onInit: function() {
            const viewModel = new JSONModel({ busy: false });
            this.getRouter().getRoute("post").attachPatternMatched(this._onPostMatched, this);
            this.setModel(viewModel, "postView");
        },
        onNavBack: function() {
            this.myNavBack("worklist");
        },
        _onPostMatched: function(event) {
            const viewModel = this.getModel("postView");
            const dataModel = this.getModel();

            this.getView().bindElement({
                path: `/Posts('${event.getParameter("arguments").postId}')`,
                events: {
                    dataRequested: function() {
                        dataModel.metadataLoaded().then(function() {
                            viewModel.setProperty("/busy", true);
                        });
                    },
                    dataReceived: function() {
                        viewModel.setProperty("/busy", false);
                    }
                }
            });
        }
    });
});