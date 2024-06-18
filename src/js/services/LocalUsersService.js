import ApiDataSource from "../dataSources/remote/ApiDataSource.js";

class LocalUsersService {
  static async getUsers() {
    return await ApiDataSource.get("./src/mock/databases/users.json");
  }
}

export default LocalUsersService;
