import React, { Component } from 'react'
import Title from './Components/Title'
import Pictures from './Components/Pictures'

class App extends Component {
  
  render() {
    const {pictures} = this.props;
    return (
      <div style={styles.container}>
        <Title>
          Pictures
        </Title>
        <Pictures 
          pictures={pictures}
        />
      </div>
    );
  };
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default App;
