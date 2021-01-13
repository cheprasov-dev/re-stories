export function filterSearch(data, value) {
    if (data) {
        const search = value.toLowerCase();
        return data.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    } else return data
}
