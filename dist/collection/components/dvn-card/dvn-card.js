export class DvnCard {
    render() {
        return (h("div", null,
            h("p", null, "Hello DvnCard!")));
    }
    static get is() { return "dvn-card"; }
    static get style() { return "/**style-placeholder:dvn-card:**/"; }
}
