import { isUndefined } from "./typeChecks";

export const move = <T>(data: (T | undefined)[], from: number, to: number): (T | undefined)[] => {
	if (!Array.isArray(data)) {
		return [];
	}

	if (isUndefined(data[to])) {
		data[to] = undefined;
	}
	data.splice(to, 0, data.splice(from, 1)[0]);

	return data;
};
