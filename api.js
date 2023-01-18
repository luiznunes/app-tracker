export const request = async () => {
    try {
      const response = await fetch('http://192.168.10.72:8000/api/get/points');
      // const json = JSON.parse(await response.json());
      const json = await response.json();
      // return json;
      // console.log(json);
    }
    catch (e) {
      console.log('We have the error', e);
    }
  }

 

// async fetch(pageOffset, pageSize, stats) {
//   try {
//       const response = await fetch(`http://localhost:3000/api/building/all?skip=${pageOffset}&limit=${pageSize}`);
//       const responseJson = await response.json();
//       return responseJson.buildings;
//   } catch(error){
//        console.error(error);
//   }


//   export function loginWithToken () {
//     return async dispatch => {
//       try {
//         const coordinates = await fetch('http://192.168.3.3:8000/api/get/points')
//         console.log(coordinates)
//         dispatch({
//           type: types.FETCH_COORDINATES,
//           payload: coordinates,
//         })
//       } catch (err) {
//         dispatch({
//           type: types.UPDATE_ERRORS,
//           payload: [
//             {
//               code: 735,
//               message: err.message,
//             },
//           ],
//         })
//       }
//     }
//   }