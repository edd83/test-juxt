const bent = require('bent');
const getJSON = bent('json');

const TOKEN = '1f9fcb72e6b5d043a34b34bc5f4f86e1';

function messageFormat(obj) {
    return `Current weather - ${obj.currently.summary}, Today we will see - ${obj.hourly.summary} with a ${obj.currently.precipProbability}% chance of rain.`;
}

async function getWeather(lat, lng): Promise<string> {
    let url = `https://api.darksky.net/forecast/${TOKEN}/${lat},${lng}`;
    // console.debug(url);
    let obj = await getJSON(url);
    if (!obj) {
        throw new Error('An error occured when requesting weather api');
    }
    // console.debug(obj);
    return messageFormat(obj);
}

async function getCityInfo(city): Promise<string> {
    // console.debug(url);
    let obj = await getJSON('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json');
    if (!obj) {
        throw new Error('An error occured when requesting cities json');
    }
    // console.debug(obj);
    const location = obj.filter((elem) => elem.name === city);
    if (location.length === 0) {
        throw new Error('City entered in paramteter does not exist');
    }
    const message = await getWeather(location[0].lat, location[0].lng);
    return message;
}

export async function main(args: string[]): Promise<void> {
    try {
        // console.log(await getWeather(60.59329987, -1.44250533));
        console.log(await getCityInfo(args[0]));
    } catch (err) {
        console.error(err);
    }
}
