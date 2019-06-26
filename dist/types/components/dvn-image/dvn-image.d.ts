export declare class DvnImage {
    el: HTMLElement;
    alt: string;
    src: string;
    oldSrc: string;
    io: IntersectionObserver;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    handleImage(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    render(): any;
}
