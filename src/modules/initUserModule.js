import {getDataUserBridge} from "./API/bridge/getDataUserBridge";
import {addUserAPI} from "./API/server/addUserAPI";

/*
    Модуль по инициализации пользователя
*/

export async function initUserModule() {

  /* инициализация переменных */
  let responseModule = {
    dataUser: false,
    newUser: false,
    error: false,
  }

  let dataUser;
  let id;

  try { // получение данных пользователя
    dataUser = await getDataUserBridge();
  } catch (error) { // в случае ошибки завершаем работу модуля и возвращаем ошибку
    console.log(error);
    return {
      ...responseModule,
      error,
    }
  }

  id = dataUser.id; // записываем индификатор пользователя

  try {  // отправляем индификатор на сервер для проверки есть пользователь в бд или нет в случае успеха завершаем работу модуля и возвращаем данные
    const response = await addUserAPI(id);
    if (response.error) {
      console.log(response.error);
      return {
        ...dataUser,
        error: response.error
      }
    } else {
      return {
        dataUser,
        newUser: response.new_user,
        error: response.error,
      }
    }
  } catch (error) { // в случаем ошибки завершаем работу модуля с ошибкой
    console.log(error)
    return {
      ...dataUser,
      error,
    }
  }
}
