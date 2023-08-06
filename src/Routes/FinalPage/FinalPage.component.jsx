import './FinalPage.styles.css';

const FinalPage = (props) => {
    return (
      <div className={`final-page ${props.class}`}>
        <h1 className='main-header'>הסתיימה הפגישה</h1>
        <h2>!תודה על ההשתתפות</h2>
      </div>
    );
}
  
export default FinalPage;