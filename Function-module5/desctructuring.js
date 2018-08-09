'use strict'

// !Когда фун-я принемает обькт всегда деструктуризировать в переменную !



    /**
     * ==========================================================================
     * Есть объект пользователя и из объекта необходимо взять всего N полей
     * ==========================================================================
     */

    // const user = {
    //   name: 'Mango',
    //   age: 2,
    //   email: 'mango@gmail.com',
    // };

    /* Если НЕ использовать деструктуризацию -  🤢 */
    // const name = user.name;
    // const email = user.email;

    // console.log(`
    //   Name: ${name}
    //   Email: ${email}
    // `);

    /* Если использовать деструктуризацию - 😁 */
    // const { name, email } = user;

    // console.log(`
    //   Name: ${name}
    //   Email: ${email}
    // `);

    /**
     * ==========================================================================
     * Есть функция которая логирует информацию о госте отеля
     * имя, возвраст, пол, номер комнаты, дату заселения и выселения
     * ==========================================================================
     */
   // Если передавать отдельными аргументами - 🤢 */

  //   const logger = (name, age, gender, room, checkedIn, checkingOut) => {
  //     console.log(`
  //       Name: ${name}
  //       Age: ${age}
  //       Gender: ${gender}
  //       Room: ${room}
  //       Cheked In: ${checkedIn}
  //       Checking Out: ${checkingOut}
  //     `);
  //   };
  //
  // logger('Mango', 2, 'male', 24, '12.02.2030', '17.04.3030'); // --- непонятно что то ..???



    /* Сущности хранятся в объектах */
    // const guest = {
    //   name: 'Mango',
    //   age: 2,
    //   gender: 'male',
    //   room: 24,
    //   checkedIn: '12.02.2030',
    //   checkingOut: '17.04.3030',
    // };

    /* Тогда функция выглядит так, от guest.* глаза болят 😵 */

    // const logger = guest => {
    //   console.log(`
    //     Name: ${guest.name}
    //     Age: ${guest.age}
    //     Gender: ${guest.gender}
    //     Room: ${guest.room}
    //     Cheked In: ${guest.checkedIn}
    //     Checking Out: ${guest.checkingOut}
    //   `);
    // };

    /* И в функцию тоже передается объект */
     // logger(guest);

    /* Если деструктуризировать входищий объект прямо в подписи функции 😍 */


    const guest = {
        name: 'Mango',
        age: 2,
        gender: 'male',
        room: 24,
        checkedIn: '12.02.2030',
        checkingOut: '17.04.3030',
    };

    const logger = ({ name, age, gender, room, checkedIn, checkingOut }) => {

        // Вместо Name: ${guest.name}
      console.log(`
        Name: ${name}
        Age: ${age}
        Gender: ${gender}
        Room: ${room}
        Cheked In: ${checkedIn}
        Checking Out: ${checkingOut}
      `);
    };
    logger(guest);

