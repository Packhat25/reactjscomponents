import './components.css';
/* accepts the prop from the textbox in the app.js and uses it for it to change dynamically */
function WelcomeCard(User) {
  return (
    <div className="welcomeCard">
      <h1>Welcome to my Web App {User.Name}! </h1>   
    </div>
  );
}
export default WelcomeCard;