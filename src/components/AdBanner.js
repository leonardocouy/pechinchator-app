import React, { Component } from "react";

class AdBanner extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
		const style = {
			display: 'block',
		};

		return(
			<ins className="adsbygoogle"
        style={style}
        data-ad-client={process.env.REACT_APP_GOOGLE_ADS_KEY}
        data-ad-slot={this.props.slot}
        data-ad-format="auto">
			</ins>
		);
  }
}


export default AdBanner;
