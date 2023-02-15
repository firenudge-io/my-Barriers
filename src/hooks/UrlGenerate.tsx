export const UrlGenerate = (date_read: string, time_read: string, phase: string, b1: string, b2: string, b3: string, b4: string) => {

    const final_url = 'https://calendar.google.com/calendar/u/0/r/eventedit?' +
        'text=Records &dates=' + date_read +
        'T' + time_read +
        '/' + date_read +
        'T' + time_read +
        '&details=Phase : ' + phase +
        '%0A%0A%0A  1 : ' + b1 +
        '%0A%0A  2 : ' + b2 +
        '%0A%0A  3 : ' + b3 +
        '%0A%0A  4 : ' + b4

    return final_url
}