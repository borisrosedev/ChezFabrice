import ApiDataSource from "../dataSources/remote/ApiDataSource"

class LocalUsersService {

    async getUsers(){
        return await ApiDataSource.get("./src/mock/databases/users.json")
    }
}

export default LocalUsersService