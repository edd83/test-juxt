const bent = require('bent');
const getJSON = bent('json');

const TOKEN = '1f9fcb72e6b5d043a34b34bc5f4f86e1';
const lat = 60.59329987;
const long = -1.44250533;

let url = `https://api.darksky.net/forecast/${TOKEN}/${lat},${long}`;

async function getData(): Promise<JSON> {
    console.log(url)
    let obj = await getJSON(url);
    return obj;
}

export async function main(args: string[]): Promise<void> {
    try {
        console.log(await getData());
    } catch (e) {
        console.error(e);
    }
}
