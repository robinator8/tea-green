import moment from 'moment'

export function formatTime(seconds) {
    const m = moment.utc(seconds, "X")
    if (!m.isValid()) return '0:00'
    return m.format("m:ss")
}

// output = [
//     {
//         year: 2019,
//         songs: [
//             {
//                 date: '',
//                 mp3: '',
//                 artist: '',
//             }
//         ]
//     }
// ]

export function yearSplit(songs) {
    const years = [...new Set(songs.map(({ date }) => moment.utc(date).format("YYYY")))]
    return years.map(year => ({
        year: year,
        songs: songs.filter(({ date }) => moment.utc(date).format("YYYY") === year)
    }))
}

// output = [
//     {
//         month: Jan,
//         songs: [
//             {
//                 date: '',
//                 mp3: '',
//                 artist: '',
//             }
//         ]
//     }
// ]
export function monthSplit(songs) {
    const months = [...new Set(songs.map(({ date }) => moment.utc(date).format("MMM")))]
    return months.map(month => ({
        month: month,
        songs: songs.filter(({ date }) => moment.utc(date).format("MMM") === month)
    }))
}
export function weekSplit(songs) {
    const weeks = [...new Set(songs.map(({ date }) => moment.utc(date).format("w")))]
    return weeks.map(week => (
        songs.filter(({ date }) => moment.utc(date).format("w") === week)
    ))
}
// output = [
//     {
//         year:
//         months: [
//             {
//                 month:
//                 weeks: [
//                     [
//                         {
//                             date: ,
//                             dayOfMonth: 01,
//                             dayOfWeek: 'sun',
//                             mp3: ,
//                             artist: ,
//                         }
//                     ],
//                     ...
//                 ]
//             },
//             ...
//         ]
//     },
//     ...
// ]
export function fullSplit(songs) {
    return yearSplit(songs).map(({ year, songs }) => ({
        year: year,
        months: monthSplit(songs).map(({ month, songs }) => ({
            month: month,
            weeks: weekSplit(songs).map(week => week.map(({ date, src, artist }) => ({
                date: date,
                dayOfMonth: moment.utc(date).format('DD'),
                dayOfWeek: moment.utc(date).format('ddd'),
                src: src,
                artist: artist
            })))
        }))
    }))
}