import jsonData from '../api/db.json';
//https://www.dhiwise.com/post/how-to-use-json-server-in-frontend-development
export async function getData() {
  if (process.env.NODE_ENV === 'development') {
    const apiUrl = 'http://localhost:3001/plants';
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        console.log('Failed to connect to port 3001');

        return jsonData;
      }
      return res.json();
    } catch (error) {
      // Handle fetch error
      console.error(error);
      console.log('Fallback db');

      return jsonData;
    }
  } else {
    console.log('HELLOOOO PROD');
    return jsonData;
  }
}
