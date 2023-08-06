import './Error.styles.css'

const Error = () => {
    return (
        <div className="error">
            <div className='black-overlay z-index-bg'></div>
            <div className='error-container'>
                <h2 className='error-header'>נראה שקרתה טעות...</h2>
                <p className='abouts-text'>שימו לב שכל השדות מלאים בצורה תקינה.</p>
            </div>
        </div>
    );
}

export default Error;
