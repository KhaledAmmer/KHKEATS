import axios from "axios";
import { hostUrl } from "..";
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

  static async getMealsByRestaurant({ restaurantId }) {
    try {
      const response = await axios.get(`${hostUrl}/user/${restaurantId}`);
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


  static async UpdateAdress({ userid,city,buldingNumber, street, notes }) {
    console.log(userid, "user", city,buldingNumber,street,"kkkk")
    try {
      const response = await axios.put(`${hostUrl}/user/${userid}`, {
        street,
        city,
        notes,
        buldingNumber,
     
     

      });
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


  static async getaddrssByuserTd({ userid }) {
    console.log(userid)
    try {
      const response = await axios.get(`${hostUrl}/user/address/${userid}`);
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





}


