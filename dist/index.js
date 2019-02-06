"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var prerender_spa_plugin_1 = require("prerender-spa-plugin");
var Renderer = prerender_spa_plugin_1["default"].PuppeteerRenderer;
var PrerenderMpaPlugin = (function () {
    function PrerenderMpaPlugin(pluginOptions) {
        var indexPaths = pluginOptions.indexPaths, renderOptions = pluginOptions.renderOptions, rest = __rest(pluginOptions, ["indexPaths", "renderOptions"]);
        this.indexPaths = indexPaths;
        this.plugins = this.indexPaths
            .map(function (indexPath) { return new prerender_spa_plugin_1["default"](__assign({}, rest, { indexPath: indexPath, renderer: new Renderer(renderOptions) })); });
    }
    PrerenderMpaPlugin.prototype.apply = function (compiler) {
        this.plugins.push();
        compiler.apply.apply(compiler, this.plugins);
    };
    return PrerenderMpaPlugin;
}());
module.exports = PrerenderMpaPlugin;
//# sourceMappingURL=index.js.map