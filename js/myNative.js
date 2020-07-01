console.log("we work");

const firstCategoryBlock = document.querySelector("#category-first");

const secondCategoryBlock = document.querySelector("#category-second");
const thirdCategoryBlock = document.querySelector("#category-third");
const fourthCategoryBlock = document.querySelector("#category-fourth");
const fifthCategoryBlock = document.querySelector("#category-fifth");

let firstCategoryBlockHandler = () => {
  alert(`Доставка
  Специалисты нашего логистического отдела готовы организовать доставку Вашего заказа в любую точку России.
   Для покупателей из других стран мы предлагаем контейнерную доставку морем или грузовиками в любую точку Европы и ближнего зарубежья.`);
};

let secondCategoryBlockHandler = () => {
  alert(`Зона добычи
  Наша компания занимается переработкой кедрового ореха, ягод и грибов, собранных в экологически чистых районах Сибири.
   Каждый год мы организуем центры заготовки в Республике Алтай и Алтайском крае, а также активно сотрудничаем с
    заготовителями в Республиках Бурятия и Хакасия, Томск`);
};
let thirdCategoryBlockHandler = () => {
  alert(`Производство
  Вся продукция перерабатывается на современном российском и итальянском оборудовании. В начале 2015 года завод прошел
   сертификацию на соответствие всем нормам и стандартам системы H.A.C.C.P. Ранее на заводе была внедрена система менеджмента 
   качества ISO 9001-2011 и система менеджмента безопасности продуктов питания ISO 22000-2007.`);
};
let fourthCategoryBlockHandler = () => {
  alert(`Контроль качества
  Каждая партия проходит многократный контроль качества на всех этапах производства: контроль калибра, двойной контроль влажности,
   контроль качества очистки ядра. Финальную стадию проверки качества мы осуществляем с помощью итальянского сепаратора 
   SEA PIXEL и ручного контроля органолептических показателей контрольного образца.`);
};
let fifthCategoryBlockHandler = () => {
  alert(`Лабораторные исследования
  Каждая партия готовой продукции подвергается тщательным микробиологическим исследованиям (БГКП, патогенные микроорганизмы, плесени).
   Также мы проводим дополнительные исследования на радионуклиды и афлатоксины. Полученные результаты вносятся в паспорт качества продукции.`);
};

firstCategoryBlock.addEventListener("click", firstCategoryBlockHandler);
secondCategoryBlock.addEventListener("click", secondCategoryBlockHandler);
thirdCategoryBlock.addEventListener("click", thirdCategoryBlockHandler);
fourthCategoryBlock.addEventListener("click", fourthCategoryBlockHandler);
fifthCategoryBlock.addEventListener("click", fifthCategoryBlockHandler);