import { request,APIRequestContext} from "@playwright/test";

class APIController{
    private fakerApi!: APIRequestContext;
    async init(){
        this.fakerApi = await request.newContext({
            baseURL:'https://jsonplaceholder.typicode.com/'
        });
    }
    async getRandomUser(){
        const response = await this.fakerApi.get('users');
        const responseBody = await response.json();
        return responseBody[0];
    }

    async createTodoForUser(title: string, completed: boolean){
        const postResponse = await this.fakerApi.post(`/users/1/todos`, {
            data:{
                "title": title,
                "completed": completed
            }
        });
        const postResponseBody = await postResponse.json();
        console.log('Post response body:', postResponseBody);
        return postResponseBody;
    }

}

export default new APIController(); 