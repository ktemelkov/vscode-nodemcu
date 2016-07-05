// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/luaparse/luaparse.d.ts
declare module "luaparse" {
	export interface lexResult {
		type: number,
		value: string,
		line: number,
		lineStart: number,
		range: number[]
	}

	export function parse(code: string, options?: Object): Object;

	export function lex(): lexResult;
}