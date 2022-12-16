
function ProductService() {
    this.getListProductAPI = function () {
        var promise = axios({
            url: "https://6395af15a68e43e418ee79d1.mockapi.io/Product",
            method: "GET",
        });

        return promise;
    };

    this.deleteProductApi = function (id) {
        return axios({
            url: `https://637b69996f4024eac20ce110.mockapi.io/api/product?fbclid=IwAR2JWKVKwzsd7hnDAL7pYyz9lzMiB_jJ7IEWYkssuNaoCSaVbTOIYXZ9_1A/${id}`,
            method: "DELETE",
        });
    };
}