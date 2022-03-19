import React from 'react';
import { Context } from '../../Context';

import './CurrencyInfo.scss';

const CurrencyInfo = () => {
    const { toggleInfo, setToggle, courseData, setActive } = React.useContext(Context);
    const valuteName = courseData[0]?.course[0].Name;

    const hideInfo = () => {
        setToggle(false);
        setActive(null);
    };

    return (
        <div className={`CurrencyInfo ${toggleInfo && 'active'}`}>
            <div className='titleBlock'>
                <h1>{valuteName}</h1>
                <button onClick={hideInfo}>&#10006;</button>
            </div>
            <ul>
                {courseData.map((item, i) => {
                    const value = item.course[0]?.Value;
                    return (
                        <li className='infoItem' key={i}>
                            <p><span>{`${item.date}:`}</span></p>
                            <p>{value ? `${value} руб.` : 'Данных на эту дату нет'}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default CurrencyInfo;