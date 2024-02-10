export async function Wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, ms);
    });
}