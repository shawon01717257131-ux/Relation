/* =========================================
   SHAWON ❤️ NUSAIBA

   Relationship Start:
   18 February 2024
========================================= */


/* -----------------------------------------
   START DATE

   JavaScript month:
   January  = 0
   February = 1
----------------------------------------- */

const startDate = new Date(
    2024,
    1,
    18,
    0,
    0,
    0
);


/* =========================================
   HELPER
========================================= */

function daysInMonth(year, month) {

    return new Date(
        year,
        month + 1,
        0
    ).getDate();

}


/* =========================================
   LIVE COUNTER
========================================= */

function updateCounter() {

    const now = new Date();


    /* Prevent negative time */
    if (now < startDate) {

        document.getElementById("years").textContent = "0";

        document.getElementById("months").textContent = "0";

        document.getElementById("days").textContent = "0";

        document.getElementById("hours").textContent = "00";

        document.getElementById("minutes").textContent = "00";

        document.getElementById("seconds").textContent = "00";

        return;
    }


    /* =====================================
       YEARS
    ===================================== */

    let years =
        now.getFullYear()
        - startDate.getFullYear();


    let anniversary =
        new Date(
            startDate.getFullYear() + years,
            startDate.getMonth(),
            startDate.getDate(),
            startDate.getHours(),
            startDate.getMinutes(),
            startDate.getSeconds()
        );


    /*
       If this year's anniversary
       has not happened yet,
       remove one year.
    */

    if (anniversary > now) {

        years--;

        anniversary =
            new Date(
                startDate.getFullYear() + years,
                startDate.getMonth(),
                startDate.getDate(),
                startDate.getHours(),
                startDate.getMinutes(),
                startDate.getSeconds()
            );
    }


    /* =====================================
       MONTHS
    ===================================== */

    let months =
        (now.getFullYear()
            - anniversary.getFullYear()) * 12
        +
        (now.getMonth()
            - anniversary.getMonth());


    let monthStart =
        new Date(
            anniversary.getFullYear(),
            anniversary.getMonth() + months,
            anniversary.getDate(),
            anniversary.getHours(),
            anniversary.getMinutes(),
            anniversary.getSeconds()
        );


    /*
       Handle cases where the current
       month has fewer days.
    */

    if (monthStart > now) {

        months--;

        monthStart =
            new Date(
                anniversary.getFullYear(),
                anniversary.getMonth() + months,
                anniversary.getDate(),
                anniversary.getHours(),
                anniversary.getMinutes(),
                anniversary.getSeconds()
            );
    }


    /* =====================================
       REMAINING TIME
    ===================================== */

    let remaining =
        now.getTime()
        - monthStart.getTime();


    const MS_SECOND = 1000;

    const MS_MINUTE =
        60 * MS_SECOND;

    const MS_HOUR =
        60 * MS_MINUTE;

    const MS_DAY =
        24 * MS_HOUR;


    /* Days */

    const days =
        Math.floor(
            remaining / MS_DAY
        );


    remaining -=
        days * MS_DAY;


    /* Hours */

    const hours =
        Math.floor(
            remaining / MS_HOUR
        );


    remaining -=
        hours * MS_HOUR;


    /* Minutes */

    const minutes =
        Math.floor(
            remaining / MS_MINUTE
        );


    remaining -=
        minutes * MS_MINUTE;


    /* Seconds */

    const seconds =
        Math.floor(
            remaining / MS_SECOND
        );


    /* =====================================
       DISPLAY
    ===================================== */

    document.getElementById("years").textContent =
        years;


    document.getElementById("months").textContent =
        months;


    document.getElementById("days").textContent =
        days;


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


/* =========================================
   START
========================================= */

updateCounter();


/* =========================================
   UPDATE EVERY SECOND
========================================= */

setInterval(
    updateCounter,
    1000
);