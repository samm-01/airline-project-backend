function comparetime(timeString1, timeString2) {
    let datetime1 = new Date(timeString1);
    let datetime2 = new Date(timeString2);
    return datetime1.getTime() > datetime2.getTime();
}

// this datetime1.getTime() is EPOCH time -- number of milliseconds passed since 1 Jan 1970.

module.exports = { comparetime };