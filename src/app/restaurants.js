const API_KEY = INSERT_API_KEY_HERE;
const MAX_RESTAURANTS = 5;

export const fetchTopRestaurants = location => {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?" +
      `location=${location}&` +
      "categories=icecream&" +
      "sort_by=rating",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Origin: "localhost:8080"
      }
    }
  )
    .then(resp => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then(json => json.businesses)
    .then(restaurants => {
      const top5 = restaurants
        .filter(r => r.review_count > 0)
        .slice(0, MAX_RESTAURANTS);

      return Promise.all(
        top5.map(r =>
          fetchFirstReview(r.id).then(review =>
            Object.assign({}, r, { review })
          )
        )
      );
    });
};

const fetchFirstReview = businessId => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}/reviews`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Origin: "localhost:8080"
      }
    }
  )
    .then(resp => resp.json())
    .then(body => ({
      username: body.reviews[0].user.name,
      text: body.reviews[0].text
    }));
};
