import './App.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function App() {
  const responseFacebook = async (response) => {
    console.log("sanorita", response);
  }
  
  return (
    <div className="App">
         <FacebookLogin
              appId="178021337647400"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile"
              callback={responseFacebook}
              render={renderProps => (
                <button className="feacbookButton" onClick={(e) => { e.preventDefault(); renderProps.onClick(); }}>
                  {/* <FeacbookIcon /> */}
                  Login with Facebook
                </button>
              )}
            />
    </div>
  );
}

export default App;
