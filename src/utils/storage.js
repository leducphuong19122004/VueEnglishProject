// set local storage
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

// get data from local storage
export const getStore = name => {
    if (!name) return
    return window.localStorage.getItem(name)
}