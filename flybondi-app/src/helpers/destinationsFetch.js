import destinationsData from './destinationsData.json';

export const destinationFetch = (filter = 'COR') => {
    let data = destinationsData.map((destination) => {
        return { destination };
    });

    data = data.map((el) => el.destination);
    data = data.filter((el) => el.destination === filter);
    function comparar(a, b) {
        return a.price - b.price;
    }
    data.sort(comparar);
    return data;
};
