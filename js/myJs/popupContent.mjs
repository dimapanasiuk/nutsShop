let firstCategoryContent = `
  <div id='content'>
    <h2>Доставка</h2>
    <p>
      Специалисты нашего логистического отдела готовы организовать доставку Вашего заказа в любую точку России.
      Для покупателей из других стран мы предлагаем контейнерную доставку морем или грузовиками в любую точку Европы и ближнего зарубежья.
    </p>
  </div>`;
let secondCateContent = `
  <div id='content'>
    <h2>Зона добычи</h2>
      <p>
        Наша компания занимается переработкой кедрового ореха, ягод и грибов, собранных в экологически чистых районах Сибири.
        Каждый год мы организуем центры заготовки в Республике Алтай и Алтайском крае, а также активно сотрудничаем с
        заготовителями в Республиках Бурятия и Хакасия, Томск
      </p>
    </div>`;
let thirdCategoryContent = `
  <div id='content'>
    <h2>Производство</h2>
      <p>  
        Вся продукция перерабатывается на современном российском и итальянском оборудовании. В начале 2015 года завод прошел
        сертификацию на соответствие всем нормам и стандартам системы H.A.C.C.P. Ранее на заводе была внедрена система менеджмента
        качества ISO 9001-2011 и система менеджмента безопасности продуктов питания ISO 22000-2007.
      </p>
    </div>`;
let fourthCategoryContent = `
  <div id='content'>
    <h2>Контроль качества</h2>
      <p>  
        Каждая партия проходит многократный контроль качества на всех этапах производства: контроль калибра, двойной контроль влажности,
        контроль качества очистки ядра. Финальную стадию проверки качества мы осуществляем с помощью итальянского сепаратора
        SEA PIXEL и ручного контроля органолептических показателей контрольного образца.
      </p>
    </div>`;
let fifthCategoryContent = `
  <div id='content'>
    <h2>Лабораторные исследования</h2>
    <p>  
      Каждая партия готовой продукции подвергается тщательным микробиологическим исследованиям (БГКП, патогенные микроорганизмы, плесени).
      Также мы проводим дополнительные исследования на радионуклиды и афлатоксины. Полученные результаты вносятся в паспорт качества продукции.
    </p>
  </div>`;

let productContentOne = {
  tabeHeaderTittleFirst: "Пищевая ценность, 100г:",
  tabeHeaderTittleSecond: "эн. ценн. 875 ккал",
  tabelItemContentFirst: "белки 13,7 г",
  tabelItemContentSecond: "жиры 68,4 г",
  tabelItemContentThird: "углеводы 13,7 г",
  aboutFirst:
    "100 граммов орехов на треть удовлетворяют суточную потребность человеческого организма в белке.",
  aboutSecond: `Вода — 2,3 г; Тиамин (B1) — 0,4 мг; Рибофлавин (B2) — 0,2 мг; Аскорбиновая кислота (вит. С) — 0,8 мг;
     Витамин K — 53,9 мкг; Кальций — 16 мг; Железо — 5,5 мг; Магний — 251 мг; Фосфор — 575 мг; Калий — 597 мг; Цинк — 6,4 мг.`,
};


let productContent = (content) => {
  return `
  <div id='content'>
    <ul class="table-header">
      <li class="table-header_item">${content.tabeHeaderTittleFirst}</li>
      <li class="table-header_item table-header_last-item">${content.tabeHeaderTittleSecond}</li>
    </ul>
    <ul class="table-content">
      <li class="table-content_item">${content.tabelItemContentFirst}</li>
      <li class="table-content_item">${content.tabelItemContentSecond}</li>
      <li class="table-content_item table-content_last-item">${content.tabelItemContentThird}</li>
    </ul>
    <p>
      ${content.aboutFirst}
    </p>
    <p> 
      ${content.aboutSecond}
    </p>
</di>
`;
};

export {
  firstCategoryContent,
  secondCateContent,
  thirdCategoryContent,
  fourthCategoryContent,
  fifthCategoryContent,
  productContent,
  productContentOne 
};
