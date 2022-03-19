import React from 'react';
import { getCoursesList } from '../api/api';

const useCoursesState = () => {
    const [coursesList, setCourses] = React.useState([]);
    const [activeString, setActive] = React.useState(null);
    const [toggleInfo, setToggle] = React.useState(false);
    const [courseData, setCourseData] = React.useState([]);

    const addNullToValue = value => {
        return value < 10 ? `0${value}` : value
    };

    const getCourseData = code => {
        setCourseData(coursesList.map(item => {
            return {
                date: item.date,
                course: [...item.courses].filter(course => course.CharCode === code)
            };
        }));
    };

    const getCoursesData = async () => {
        let days = 0;

        while (days <= 9) {
            let date = new Date();
            date.setDate(date.getDate() - days);

            let year = date.getFullYear();
            let month = addNullToValue(date.getMonth() + 1);
            let day = addNullToValue(date.getDate());

            const data = await getCoursesList(`${year}/${month}/${day}`);

            if (!data) {
                setCourses(coursesList => [...coursesList, {
                    date: `${day}.${month}.${year}`,
                    courses: 'Данных на эту дату нет'
                }]);
                days++;
                continue;
            };

            setCourses(coursesList => [...coursesList, {
                date: `${day}.${month}.${year}`,
                courses: Object.values(data.Valute)
            }]);
            days++;
        };

    };

    React.useEffect(() => getCoursesData(), []);

    return { coursesList, setCourses, toggleInfo, setToggle, courseData, setCourseData, activeString, setActive, getCourseData };
};

export default useCoursesState;