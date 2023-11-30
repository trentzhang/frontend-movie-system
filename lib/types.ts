type MovieAPI = typeof movieAPI;
type Movie = typeof movieAPI.data;
type List = (typeof lists)[0];
type OwnerInfo = (typeof movieAPI.data.related_lists)[0]["owner_info"];
type ListAPI = typeof listAPI;
type UserAPI = typeof userAPI;
