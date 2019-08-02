function debounce(cb, timeout) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb.apply(this, args);
        }, timeout);
    }
}

// solution 1.
function throttle(cb, interval) {
    let enableCall = true;

    return function(...args) {
        if (!enableCall) {
            return;
        }

        enableCall = false;
        cb.apply(this, args);
        setTimeout(() => {
            enableCall = true;
        }, interval);
    }
}

export {
    debounce,
    throttle
};