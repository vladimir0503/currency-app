import React from 'react';
import { Context } from '../../Context';

import './CoursesList.scss';

const CoursesList = () => {
    const { coursesList, activeString, setActive, setToggle, getCourseData } = React.useContext(Context);

    const chooseCurrency = (id, code) => {
        getCourseData(code);
        setActive(id);
        setToggle(true);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Код валюты</th>
                    <th>Руб.</th>
                    <th>Разница в процентах</th>
                </tr>
            </thead>
            <tbody>
                {coursesList && coursesList[0]?.courses.map((item, i) => (
                    <tr
                        onClick={() => chooseCurrency(i, item.CharCode)}
                        className={`${activeString === i && 'active'}`}
                        key={i}
                        title={item.Name}
                    >
                        <td>{item.CharCode}</td>
                        <td>{item.Value}</td>
                        <td>{`${Math.abs(item.Value - item.Previous).toFixed(2)}%`}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CoursesList;