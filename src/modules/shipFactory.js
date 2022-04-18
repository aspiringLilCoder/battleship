
export default function shipFactory(name, length, instanceName) {
    let placesHit = [];
    for (let i = 0; i < length; i++) {
        placesHit.push(false);
    }

    const hit = (index) => {
        let placesHit = instanceName.placesHit;
        placesHit[index] == undefined ? console.log('Hit is undefined') : placesHit[index] = true;
    } 

    const isSunk = (arr) => arr.every(el => el == true);

    return {name, length, placesHit, hit, isSunk};
}