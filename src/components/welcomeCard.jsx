import './components.css';
function WelcomeCard(User) {
  return (
    <div className="welcomeCard">
      <h1>Welcome to my Web App {User.Name}! </h1>   
    </div>
  );
}
export default WelcomeCard;