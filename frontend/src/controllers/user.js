const { default: axios } = require("axios");
const { hostUrl } = require("..");

export class User {
  static async getAllRestaurants() {
    try {
      const response = await axios.get(`${hostUrl}/user/`);

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }

  static async getRestaurantByName({ restaurantName }) {
    try {
      const response = await axios.get(`${hostUrl}/user/${restaurantName}`);

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }
  }

  static async getRestaurantById({ restaurantId }) {
    try {
      const response = await axios.get(`${hostUrl}/user/id/${restaurantId}`);
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }
  }

  static async getMealByRestaurant({ restaurant_id }) {
    try {
      const response = await axios.get(
        `${hostUrl}/user/${restaurant_id}/meals`
      );
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }
  }

  static async addMealToCart({ quantity, subTotal, meal_id, token }) {
    try {
      const body = { quantity, subTotal };
      const response = await axios.post(`${hostUrl}/user/${meal_id}`, body, {
        headers: { authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server error",
        err: error,
      };
    }
  }

  static async deleteMealFromCart({ meal_id, token }) {
    try {
      const response = await axios.delete(
        `${hostUrl}/user/delete/${meal_id}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server error",
        err: error,
      };
    }
  }
}
