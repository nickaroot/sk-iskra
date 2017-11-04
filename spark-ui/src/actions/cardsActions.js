import axios from 'axios';

export const GET_CARDS_START = 'GET_CARDS_START';
export const GET_CARDS_FINISHED = 'GET_CARDS_FINISHED';
export const GET_CARDS_FAILED = 'GET_CARDS_FAILED';

export const SET_CHANGES_START = 'SET_CHANGES_START';
export const SET_CHANGES_FINISHED = 'SET_CHANGES_FINISHED';
export const SET_CHANGES_FAILED = 'SET_CHANGES_FAILED';

export function getCards(id) {
  return (dispatch) => {
    dispatch({
      type: GET_CARDS_START
    });

    return axios.get(
      `http://bb-mobile.ru/temp_programmer/get_cards_json.php?uid=${id}`
    )
      .then((response) => {
        if (response.status !== 200 || !response.data.success) {
          throw new Error('fetch data failed');
        }

        dispatch({
          type: GET_CARDS_FINISHED,
          data: response.data.cards
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


export function setChanges(data) {
  return (dispatch) => {
    dispatch({
      type: SET_CHANGES_START
    });

    return axios.post(
      'http://bb-mobile.ru/temp_programmer/set_changes.php',
      data
    )
      .then((response) => {
        dispatch({
          type: SET_CHANGES_FINISHED
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CHANGES_FAILED
        });

        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
}
