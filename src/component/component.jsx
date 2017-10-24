var Component = require("react-proxy-loader!./component");
// => returns the proxied component (It loads on demand.)
// (webpack creates an additional chunk for this component and its dependencies)

var ComponentProxyMixin = require("react-proxy-loader!./component").Mixin;
// => returns a mixin for the proxied component
// (This allows you to setup rendering for the loading state for the proxy)
var ComponentProxy = React.createClass({
    mixins: [ComponentProxyMixin],
    renderUnavailable: function() {
        return <p>Loading...</p>;
    }
});
