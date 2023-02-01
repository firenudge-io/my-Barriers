export const UrlGenerate = (date_read: string, time_read: string, b1: string, b2: string, b3: string, b4: string) => {

    const final_url = 'https://calendar.google.com/calendar/u/0/r/eventedit?' +
        'text=Barriers &dates=' + date_read +
        'T' + time_read +
        '/' + date_read +
        'T' + time_read +
        '&details=Barrier1 : ' + b1 +
        '%0A%0ABarrier2 : ' + b2 +
        '%0A%0ABarrier3 : ' + b3 +
        '%0A%0ABarrier4 : ' + b4

    return final_url
}