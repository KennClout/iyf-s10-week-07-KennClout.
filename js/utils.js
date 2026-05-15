
export function generateId() {
    return Date.now();
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}
