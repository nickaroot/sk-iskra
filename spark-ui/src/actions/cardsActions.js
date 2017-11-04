import axios from 'axios';

export const GET_CARDS_START = 'GET_CARDS_START';
export const GET_CARDS_FINISHED = 'GET_CARDS_FINISHED';
export const GET_CARDS_FAILED = 'GET_CARDS_FAILED';

export function getCards(id) {
  return (dispatch) => {
    dispatch({
      type: GET_CARDS_START
    });

    return axios.get(
      `http://bb-mobile.ru/temp_programmer/get_cards_json.php?uid=${id}`
    )
      .then((response) => {
        dispatch({
          type: GET_CARDS_START,
          data: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CARDS_FAILED
        });

        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
}
