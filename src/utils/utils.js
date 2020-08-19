



export function normalizeDate(timestamp) {
    let time = timestamp.split("T")
    return (
        "Updated on: " + time[0] + "      " + time[1].substr(0, time[1].length - 1)
    )
}

export function replaceFalseText(str) {
    return str.replace(/\[.*?\]/g, "")
}

export function isError(status) {
    return (status === "error") ? true : false
}