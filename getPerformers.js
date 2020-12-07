const reader = require('g-sheets-api')
const fs = require('fs')
const readerOptions = {
    sheetId: '1rB7yAKKrYtcJtsEkqmjiIGpxAtDI_MIHLWRwdji4azQ'
}

reader(readerOptions, (results) => {
    const cleaned = results.map(res => {
        const youtubeID = getLink(res.link);
        const fullName = [res['first name'], res['last name']].join(' ')
        return {...res, fullName, youtubeID}
    })
    const jsonified = JSON.stringify(cleaned)
    fs.writeFileSync('data/performers.json', jsonified)
})

const getLink = (url) => {
    const regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|vi|e(?:mbed)?)\/|\S*?[?&]v=|\S*?[?&]vi=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = url.match(regex)
    return match && match[1]
}
