import { useState, useContext, useEffect } from 'react';
import React, { useRef } from 'react';
import './Abouts.styles.css';

const Abouts = (props) => {
    const ref = useRef("");

    useEffect(() => {
        ref.current = props.type;
    }, [props.type]);
    return (
        <>
            {/* {ref.current === "closed" ? null : */}
            <div className="abouts-container">
                <div className='black-overlay z-index-bg'></div>
                <div className='Abouts'>
                    {props.type === "abouts" ?
                        <div>
                            <h2 className='abouts-main-header'>אודות</h2>
                            <div className='abouts-content-container'>
                                <div className='content-container'>
                                    <h2 className='abouts-header'>פיתוח ו-UX</h2>
                                    <p className='abouts-text'>רב״ט הדר יחזקאל</p>
                                </div>
                                <div className='content-container'>
                                    <h2 className='abouts-header'>עיצוב גרפי</h2>
                                    <p className='abouts-text'>רב״ט הילה אור-חוף</p>
                                </div>
                                <div className='content-container'>
                                    <h2 className='abouts-header'>רמ״ד טי״ל</h2>
                                    <p className='abouts-text'>רס״מ שלומי אוגרן</p>
                                </div>
                                <div className='content-container'>
                                    <h2 className='abouts-header'>רת״ח חדשנות בלמידה</h2>
                                    <p className='abouts-text'>רס״ל אביב ואנונו</p>
                                </div>
                            </div>
                        </div> : null }
                        {props.type === "question" ? <div className='text-organize'>
                            <h2 className='abouts-main-header'>קצת עלינו...</h2>
                            <p className='abouts-text'>מדור טי״ל של ענף ההדרכה בקריית ההדרכה נועד להפוך את חווית השירות והלמידה של משרתי צה״ל וקריית ההדרכה בפרט לאיכותי יותר, טכנולוגי יותר ומתקדם יותר.</p>
                            <p className='abouts-text'>במערכת זו תוכלו להיעזר על מנת לארגן את הפגישות, הכנסים וההרצאות שלכם בצורה נוחה. הכניסו את הפרטים המתאימים, בחרו ערכת עיצוב וצרו הצגה מותאמת אישית!</p>
                            <p className='abouts-text' style={{userSelect: "all"}}><b>צרו קשר:</b> mador.till@gmail.com</p>
                        </div> : null }
                </div>
            </div>
        </>
    );

}

export default Abouts;