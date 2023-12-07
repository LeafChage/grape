// import { FC, PropsWithChildren, DetailedHTMLProps, HTMLAttributes } from "react"
//
// export const bulma = () => {
//     type Tag = "div" | "p" | "span" | "a"
//     type HTMLTagProp<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;
//
//     type TagProps<T extends Tag> =
//         T extends 'div' ? HTMLTagProp<HTMLDivElement> :
//         T extends 'p' ? HTMLTagProp<HTMLParagraphElement> :
//         T extends 'span' ? HTMLTagProp<HTMLSpanElement> :
//         T extends 'a' ? HTMLTagProp<HTMLAnchorElement> :
//         never;
//
//     function generate<T extends Tag>(tag: T, definedClass: string): JSX.Element {
//         return div
//         // return (props) => {
//         //     const c = props.className !== undefined ?
//         //         `${definedClass} ${props.className}` :
//         //         definedClass;
//         //
//         //     switch (tag) {
//         //         case "div":
//         //             return <div className={c} > {props.children} </div>
//         //         case "p":
//         //             return <p className={c} > {props.children} </p>
//         //         case "span":
//         //             return <span className={c} > {props.children} </span>
//         //         case "a":
//         //             return <a className={c} href={props.}> {props.children} </a>
//         //     }
//         // }
//     }
// }
// // export namespace Bulma {
// // export const generate()
// //
// //     type Tag = "div" | "p" | "span" | "a"
// //     type TagDivProps = { _div: never, className?: string };
// //     type TagPProps = { _p: never, className?: string };
// //     type TagAProps = { _a: never, className?: string, href: string };
// //     type TagSpanProps = { _span: never, className?: string };
// //
// //     type TagProps<T extends Tag> =
// //         T extends 'div' ? TagDivProps :
// //         T extends 'p' ? TagPProps :
// //         T extends 'span' ? TagSpanProps :
// //         T extends 'a' ? TagAProps :
// //         never;
// //
// //     function generate(tag: 'a', definedClass: string): FC<PropsWithChildren<TagProps<'a'>>>;
// //     function generate(tag: 'div', definedClass: string): FC<PropsWithChildren<TagProps<'div'>>>;
// //     function generate(tag: 'p', definedClass: string): FC<PropsWithChildren<TagProps<'p'>>>;
// //     function generate(tag: 'span', definedClass: string): FC<PropsWithChildren<TagProps<'span'>>>;
// //     function generate<T extends Tag>(tag: T, definedClass: string): FC<PropsWithChildren<TagProps<T>>> {
// //         return (props) => {
// //             const c = props.className !== undefined ?
// //                 `${definedClass} ${props.className}` :
// //                 definedClass;
// //
// //             switch (tag) {
// //                 case "div":
// //                     return <div className={c} > {props.children} </div>
// //                 case "p":
// //                     return <p className={c} > {props.children} </p>
// //                 case "span":
// //                     return <span className={c} > {props.children} </span>
// //                 case "a":
// //                     return <a className={c} href={props.}> {props.children} </a>
// //             }
// //         }
// //     }
// //
// //     export const a = (defined: string) => generate("a", defined);
// //
// //
// //     export const div = function(defined: string): FC<PropsWithChildren<{
// //         className?: string
// //     }>> {
// //         return (props) => {
// //             const c = props.className !== undefined ?
// //                 `${defined} ${props.className}` :
// //                 defined;
// //
// //             return <div className={c} >
// //                 {props.children}
// //             </div>
// //         }
// //     }
// //
// //     export const p = function(defined: string): FC<PropsWithChildren<{
// //         className?: string
// //     }>> {
// //         return (props) => {
// //             const c = props.className !== undefined ?
// //                 `${defined} ${props.className}` :
// //                 defined;
// //
// //             return <div className={c} >
// //                 {props.children}
// //             </div>
// //         }
// //     }
// //
// //     export const span = function(defined: string): FC<PropsWithChildren<{
// //         className?: string
// //     }>> {
// //         return (props) => {
// //             const c = props.className !== undefined ?
// //                 `${defined} ${props.className}` :
// //                 defined;
// //
// //             return <div className={c} >
// //                 {props.children}
// //             </div>
// //         }
// //     }
// //
// //     export const a = function(defined: string): FC<PropsWithChildren<{
// //         className?: string
// //     }>> {
// //         return (props) => {
// //             const c = props.className !== undefined ?
// //                 `${defined} ${props.className}` :
// //                 defined;
// //
// //             return <div className={c} >
// //                 {props.children}
// //             </div>
// //         }
// //     }
// // }
