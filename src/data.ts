import { IDevice } from "./components/Device";

export const devices: IDevice[] = [
	{
		id: 1,
		model: "Smart Light Switch",
		price: 6,
		brand: 36,
		comment: "китайский модуль 2 реле без корпуса",
		link: "https://aliexpress.ru/item/1005004761169740.html",
		description: "китайский модуль 2 реле без корпуса",
		deviceType: 0,
		variation: null,
	},
	{
		id: 3,
		model: "cwt-th02s",
		price: null,
		brand: 11,
		comment: "термометр наружный CWT-TH02S, ссылка на старый!!!",
		link: "https://aliexpress.ru/item/1005001404952412.html",
		description: "термометр наружный CWT-TH02S, ссылка на старый!!!",
		deviceType: 1,
		variation: null,
	},
	{
		id: 4,
		model: "zts-3008-w5-n01",
		price: null,
		brand: 11,
		comment: "термометр + влагомер в белом корпусе - СТАРЫЙ",
		link: null,
		description: "термометр + влагомер в белом корпусе - СТАРЫЙ",
		deviceType: 1,
		variation: null,
	},
	{
		id: 5,
		model: "D0742",
		price: 3,
		brand: 37,
		comment: "китайский диммер со сложным управлением",
		link: "https://aliexpress.ru/item/32839115405.html",
		description: "китайский диммер со сложным управлением",
		deviceType: 0,
		variation: "HD4502",
	},
	{
		id: 7,
		model: "CTRA401",
		price: 11,
		brand: 26,
		comment: "амперметр (переменный ток)",
		link: "https://aliexpress.ru/item/1005005716060976.html",
		description: "амперметр (переменный ток)",
		deviceType: 0,
		variation: "20A Shell",
	},
	{
		id: 8,
		model: "N4VIA02",
		price: 8,
		brand: 26,
		comment: "амперметр и вольтметр",
		link: "https://aliexpress.ru/item/1005004933078159.html",
		description: "амперметр и вольтметр",
		deviceType: 0,
		variation: "5A with DIN box",
	},
	{
		id: 9,
		model: "MA01-AXCX4040",
		price: null,
		brand: 4,
		comment: "EBYTE 2 DI + 2 AI + 4 реле",
		link: "https://aliexpress.ru/item/1005005120977386.html",
		description: "EBYTE 2 DI + 2 AI + 4 реле",
		deviceType: 0,
		variation: null,
	},
	{
		id: 10,
		model: "STM8S103 4 Way",
		price: null,
		brand: 36,
		comment: "китайский модуль 4 реле без корпуса",
		link: "https://aliexpress.ru/item/1005002827839332.html",
		description: "китайский модуль 4 реле без корпуса",
		deviceType: 0,
		variation: "relay4ch",
	},
	{
		id: 11,
		model: "zts-3000-i20",
		price: null,
		brand: 11,
		comment: "Analog Input 2ch в корпусе - GH12725-15 ???",
		link: "https://aliexpress.ru/item/1005005977219552.html",
		description: "Analog Input 2ch в корпусе - GH12725-15 ???",
		deviceType: 0,
		variation: null,
	},
];

export const deviceTypes = [
	{ id: 1, name: "Контроллер, ПЛК" },
	{ id: 2, name: "Базовая плата для контроллера" },
	{ id: 3, name: "Корпус для контроллера" },
	{ id: 4, name: "Модуль расширения для ПЛК" },
	{ id: 5, name: "Плата расширения для ПЛК" },
	{ id: 6, name: "Блок питания" },
	{ id: 7, name: "Провод питания" },
	{ id: 8, name: "Разъем питания" },
	{ id: 9, name: "Комбинированный датчик" },
	{ id: 10, name: "Модуль для термодатчика" },
	{ id: 11, name: "Термометр" },
	{ id: 12, name: "Датчик движения" },
	{ id: 13, name: "Датчик присутствия" },
	{ id: 14, name: "Датчик атмосферного давления" },
	{ id: 15, name: "Датчик давления жидкости" },
	{ id: 16, name: "Датчик протечки" },
	{ id: 17, name: "Датчик влажности" },
	{ id: 19, name: "Датчик влажности почвы" },
	{ id: 20, name: "Датчик дождя" },
	{ id: 21, name: "Датчик уровня жидкости" },
	{ id: 22, name: "Датчик освещенности" },
	{ id: 23, name: "Датчик шума" },
	{ id: 24, name: "Газоанализатор" },
	{ id: 25, name: "Энкодер" },
	{ id: 26, name: "Измеритель электро параметров" },
	{ id: 27, name: "Датчик электрического тока" },
	{ id: 29, name: "Блок резервного питания" },
	{ id: 30, name: "Преобразователь интерфейсов" },
	{ id: 31, name: "Концевой выключатель" },
	{ id: 32, name: "Тумблер" },
	{ id: 33, name: "Клавиша" },
	{ id: 34, name: "Переключатель 2-х позиционный" },
	{ id: 35, name: "Переключатель 3-х позиционный" },
	{ id: 36, name: "Клавиша" },
	{ id: 37, name: "Диммер светодиодных лент" },
	{ id: 39, name: "Умный выключатель" },
	{ id: 43, name: "Панель управления, HMI" },
	{ id: 44, name: "Диммер AC220V" },
	{ id: 45, name: "Драйвер шагового мотора" },
	{ id: 46, name: "Сигнальная лампа" },
	{ id: 47, name: "Сигнальное табло" },
	{ id: 48, name: "Звуковой оповещатель" },
	{ id: 49, name: "Модуль цифровых выходов" },
	{ id: 50, name: "Модуль аналоговых выходов" },
	{ id: 51, name: "Контроллер ШИМ" },
	{ id: 52, name: "Запорная арматура" },
	{ id: 53, name: "Электромагнитный клапан" },
];

export const deviceBrands = [
	{ id: 1, name: "Aubess" },
	{ id: 2, name: "PLCOME" },
	{ id: 3, name: "JIAQISHENG JQS" },
	{ id: 4, name: "CDEBYTE" },
	{ id: 5, name: "Aubess" },
	{ id: 6, name: "XINGKECHUANG" },
	{ id: 7, name: "Wiren Board" },
	{ id: 8, name: "eletechsup" },
	{ id: 9, name: "UICPAL" },
	{ id: 10, name: "TZT" },
	{ id: 11, name: "iHseno" },
	{ id: 12, name: "GLEDOPTO" },
	{ id: 13, name: "Sunworld Technology" },
];
