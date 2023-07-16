export function getClassName (classList: string[]) {
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
