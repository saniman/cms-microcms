import { RESTDataSource } from "apollo-datasource-rest";

class MicroCMSAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }
  willSendRequest(request) {
    request.headers.set("X-API-KEY", process.env.API_KEY);
  }
  async getAllPosts(id) {
    return this.get(`example?${id ? "filters=id[not_equals]" + id : ""}`);
  }
  async getPostByID(id, draftKey) {
    return this.get(`example/${id}${draftKey ? "?draftKey=" + draftKey : ""}`);
  }
}

export default MicroCMSAPI;
