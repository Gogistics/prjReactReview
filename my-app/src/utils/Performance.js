function debounce(cb, timeout) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout( function() {
            console.log('triggered...');
            cb.apply(this, args);
        }.bind(this), timeout);
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