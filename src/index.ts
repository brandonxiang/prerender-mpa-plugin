
const PrerenderSPAPlugin = require('prerender-spa-plugin')
import optionsInterFace from './module/optionInterFace'
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

class PrerenderMpaPlugin {

    plugins: Array<any>;
    indexPaths: Array<string>;

    constructor(pluginOptions: optionsInterFace) {
        const { indexPaths, renderOptions, ...rest } = pluginOptions;
        this.indexPaths = indexPaths;
        this.plugins = this.indexPaths
        .map(indexPath => new PrerenderSPAPlugin({
            ...rest,
            indexPath,
            renderer: new Renderer(renderOptions)
        }));
    }

    apply(compiler) {
        this.plugins.push()
        compiler.apply(
           ...this.plugins
        );
    }

}

export = PrerenderMpaPlugin;