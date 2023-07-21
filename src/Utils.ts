export function setClassName (classList: string[]) {
    return classList.join(" ").replaceAll(/\s{2,}/g, " ").trim();
}

/**
 * Returns one of two values depending on a condition.
 *  
 * @param predicate Condition to check
 * @param trueValue Value returned if the condition is true
 * @param falseValue Value returned if the condition is false
 */
export function cond<T> (predicate: boolean, trueValue: T, falseValue: T): T {
    return predicate ? trueValue : falseValue;
}

export function curry<T> (fn: (...args: any) => T): (...args: any) => T {
    return function curried (...args: any): any {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return curried.bind(null, ...args);
        }
    };
}
