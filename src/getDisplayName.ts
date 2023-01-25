const getDisplayName = (firstName: string, lastName: string, city: string = '', curriculum: string = '') => {
    city = (city.length > 0) ? city : '?';
    curriculum = curriculum == 'workstudy' ? ' - WnS' : '';  
    return (`[${city}] ${firstName} ${lastName}${curriculum}`)
}

export default getDisplayName
