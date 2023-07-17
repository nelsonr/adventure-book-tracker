export function loadStorage<T> (): T | null {
    const data = localStorage.getItem("adventure-book");

    return data ? JSON.parse(data) : null;
}

export function updateStorage<T> (data: T): void {
    localStorage.setItem("adventure-book", JSON.stringify(data));
}
