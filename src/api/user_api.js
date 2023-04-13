import ApiManager from './ApiManager';

export const user_login = async data => {
  try {
    const result = await ApiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    console.log('success : ',result)
    return result;
  } catch (error) {
    console.log('error : ',error)
    return error.response;
  }
};
