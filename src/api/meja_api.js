import ApiManager from './ApiManager';

export const meja = async data => {
  try {
    const result = await ApiManager('/datameja', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    console.log('success : ', result);
    return result;
  } catch (error) {
    console.log('error : ', error);
    return error.response;
  }
};
