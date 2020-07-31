"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LocalDataSource = void 0;
var abstractDataSource_1 = require("./abstractDataSource");
var LocalDataSource = /** @class */ (function (_super) {
    __extends(LocalDataSource, _super);
    function LocalDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalDataSource.prototype.loadProducts = function () {
        return Promise.resolve([
            { id: 1, name: "P1", category: "Watersports",
                description: "P1 (Watersports)", price: 3 },
            { id: 2, name: "P2", category: "Watersports",
                description: "P2 (Watersports)", price: 4 },
            { id: 3, name: "P3", category: "Running",
                description: "P3 (Running)", price: 5 },
            { id: 4, name: "P4", category: "Chess",
                description: "P4 (Chess)", price: 6 },
            { id: 5, name: "P5", category: "Chess",
                description: "P6 (Chess)", price: 7 },
        ]);
    };
    return LocalDataSource;
}(abstractDataSource_1.AbstractDataSource));
exports.LocalDataSource = LocalDataSource;
