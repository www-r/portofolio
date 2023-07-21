// @ts-ignore
export function debounce(func: Function, timeout = 3000) {
	let timer: NodeJS.Timeout;
	return (...args: any[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(func, args);
		}, timeout);
	};
}
