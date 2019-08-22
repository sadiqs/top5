import React from "react";

class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location
    };
  }

  locationChanged = event => {
    const location = event.target.value;
    this.setState((prevState, props) => ({ location }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLocationChange(this.state.location);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Top 5 Restaurants</h5>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Location"
                  value={this.state.location}
                  onChange={this.locationChanged}
                />
              </div>
              <div className="col-sm-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control"
                  disabled={this.props.loading}
                >
                  {this.props.loading ? (
                    <span className="spinner-border spinner-border-sm" />
                  ) : (
                    "Top 5"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
