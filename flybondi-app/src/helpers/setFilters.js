export const getFiltered = (data, filter) => {
    switch (filter) {
        case 'COR':
            return data.filter((el) => el.destination === 'COR');
        case 'BRC':
            return data.filter((el) => el.destination === 'BRC');
        case 'EPA':
            return data.filter((el) => el.destination === 'EPA');
        case 'MDZ':
            return data.filter((el) => el.destination === 'MDZ');
        default:
            return data;
    }
};
