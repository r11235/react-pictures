import React, { Component } from 'react';

export default class Pictures extends Component {

	renderItem = (itm, i) => {

    const myFunction = ()=>{alert("Hello!")};
		
    return (
			<div style={styles.item}>
        <div style={styles.picture}><img src="itm.image" alt=""/></div>
        <div style={styles.text} onClick={myFunction}>{itm.text}</div>
			</div>
		);
	};

	render() {
		const { pictures } = this.props;

		return (
		  <div style={styles.container}>
		    {pictures.map(this.renderItem)}
		  </div>
		);
	}
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row"
  },
  item: {
    backgroundColor: "whitesmoke",
    marginLeft: 5,
    marginRight: 5,
    padding: 5
  },
  picture: {
    backgroundColor:"#e6e6e6",
  	width: 350,
  	height: 263,
    marginTop: 10,
    marginBottom: 10
  },  text: {
    backgroundColor: "#e6e6e6",
  	width: 320,
  	padding: 10,
  	border: 5,
    marginTop: 5,
    marginBottom: 5
  }
};
