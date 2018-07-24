
const groupSharm = "sharm".toUpperCase();
const groupHurgada = "hurgada".toUpperCase();
const groupTaba = "taba".toUpperCase();

let customerGroup;

let availabilitySharm = 15;
let availabilityHurgada = 25;
let availabilityTaba = 6;

let customerReply;
let orderAmount = Number(prompt("Уведіть кількість бажаних місць", 0));

if(Number.isInteger(orderAmount) && orderAmount > 0) {
  if(orderAmount <= availabilityTaba){
    customerReply = confirm(`Група "${groupTaba}" має ${orderAmount} вільних місць. Оформити замовлення?`)
    if (customerReply) {
      customerGroup = groupTaba;
    }
  }
  if(!customerReply && orderAmount <= availabilitySharm){
    customerReply = confirm(`Група "${groupSharm}" має ${orderAmount} вільних місць. Оформити замовлення?`)
    if (customerReply) {
      customerGroup = groupSharm;
    }
  }
  if(!customerReply && orderAmount <= availabilityHurgada){
    customerReply = confirm(`Група "${groupHurgada}" має ${orderAmount} вільних місць. Оформити замовлення?`)
    if (customerReply) {
      customerGroup = groupHurgada;
    }
  }

  if(customerReply === undefined){
    alert("Вибачте, але вільних місць немає.");
  }else{
    if(customerGroup){
      switch(customerGroup){
        case groupHurgada:
          availabilityHurgada -= orderAmount;
        break;
        case groupSharm:
          availabilitySharm -= orderAmount;
        break;
        case groupTaba:
          availabilityTaba -= orderAmount;
        break;
      }
      alert(`Приємної подорожі у групі "${customerGroup}"!`)
    }else{
      alert("Нам дуже шкода. Приходьте ще.");
    }
  }
}else{
  alert("Помилка уведення кількості місць.");
}