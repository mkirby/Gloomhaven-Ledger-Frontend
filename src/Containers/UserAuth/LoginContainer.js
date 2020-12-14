import React from 'react'
import { Grid, Placeholder } from 'semantic-ui-react'
import LoginForm from '../../Components/UserAuth/LoginForm'

function LoginContainer() {
  return (
      
      <div className="auth-container borders">
        <div className="auth-image">
          <Placeholder style={{width: "100%", height: "100%"}}>
            <Placeholder.Image  />
          </Placeholder>
        </div>
        <div className="auth-form-div">
          <h3>Component: LoginContainer.js</h3>
            <LoginForm />
        </div>
      </div>
      // <Grid>
      //   <Grid.Column width={6}>
      //   </Grid.Column>
      //   <Grid.Column width={10}>
      //   </Grid.Column>
      // </Grid>
  )
}

export default LoginContainer