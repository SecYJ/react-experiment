export const isUndefined = (value: unknown): value is undefined => value === undefined;

export const isNull = (value: unknown): value is null => value === null;

export const isNullOrUndefined = (value: unknown): value is null | undefined => value == null;

export const isString = (value: unknown): value is string => typeof value === "string";

export const isBoolean = (value: unknown): value is boolean => typeof value === "boolean";

export const isNumber = (value: unknown): value is number => typeof value === "number";

export const isArray = (value: unknown): value is any[] => Array.isArray(value);

export const isObject = (value: unknown): value is object =>
	!isNullOrUndefined(value) && !isArray(value) && typeof value === "object";
