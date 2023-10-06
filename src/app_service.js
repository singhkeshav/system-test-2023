const baseURL = 'http://localhost:3000/';

/**
 * 
 * @param {*} payload 
 * @returns 
 */
export const addGrocery = (paylaod) =>{

    const formData = new FormData();
    formData.append('itemName', paylaod?.itemName);
    formData.append('quantity', paylaod?.quantity);
    formData.append('category', paylaod?.category);
    formData.append('grocery_image', paylaod?.grocery_image);
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
    return fetch(baseURL+"addGrocery", {
        method: 'POST',
        body: formData,
        'Content-Type': 'multipart/form-data',
    }).then(response => response.json()).catch(error => error);
}

/**
 * 
 * @param {*} payload 
 * @returns 
 */
export const getGroceryList = (payload) =>{
    return fetch(baseURL+"groceryList").then(response => response.json()).catch(error => error);
}