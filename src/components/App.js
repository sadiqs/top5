import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetchTopRestaurants } from "../app/restaurants";
import SearchForm from "./SearchForm";
import Restaurants from "./Restaurants";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      restaurants: [],
      error: ""
    };
  }

  onLocationChange = location => {
    Promise.resolve(
      this.setState(() => ({
        error: undefined,
        restaurants: [],
        loading: true
      }))
    )
      .then(() => fetchTopRestaurants(location))
      .then(restaurants => {
        this.setState(() => ({
          location,
          restaurants,
          error: undefined
        }));
      })
      .catch(error => {
        const messgae = error.message ? error.message : JSON.stringify(error);
        this.setState(() => ({
          location,
          restaurants: [],
          error: messgae
        }));
      })
      .finally(() => this.setState(() => ({ loading: false })));
  };

  render() {
    return (
      <div className="container p-5">
        {this.state.error && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}
        <SearchForm
          location="Alpharetta"
          loading={this.state.loading}
          onLocationChange={this.onLocationChange}
        />
        <Restaurants restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
