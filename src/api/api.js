const url = 'https://www.cbr-xml-daily.ru';

export const getCoursesList = async (date = null) => {
    try {
        const res = await fetch(`${url}/${date ? `archive/${date}` : ''}/daily_json.js`);
        const data = await res.json();
        return data;
    } catch (error) {
        return await error.data;
    };
};