import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass extends Vue {}
        interface IntrinsicElements {
        [elem: string]: any
        }
    }
    interface Window {
        core: any,
    }

    interface String {
        isNullOrEmpty(): boolean;
        isEqual(value: string): boolean
    }
}
