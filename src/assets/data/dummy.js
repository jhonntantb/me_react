import dashboard from '../data/dashboard/dashboard.png';
import exchange from '../data/exchange/exchange.PNG';
import petgram from '../data/petgram/petgram.PNG';
import calendar from '../data/dashboard/calendar.PNG';
import orders from '../data/dashboard/orders.PNG';
import kanban from '../data/dashboard/kanban.PNG';

export const projectsData = [
	{
		id: 1,
		img: dashboard,
		title: 'Dashboard App',
		text: 'App que simula un dashboard de admin',
	},
	{
		id: 2,
		img: exchange,
		title: 'Exhange App',
		text: 'App que muestra valor de monedas virtuales',
	},
	{
		id: 3,
		img: petgram,
		title: 'Petgram App',
		text: 'App que muestra valor de monedas virtuales',
	},
];

export const projectsDetail = [
	{
		projectId: 1,
		title: 'App Dashboard detalles',
		images: {
			img1: calendar,
			img2: orders,
			img3: kanban,
		},
		projectInfo: {
			category: 'web',
			url: 'https://vue-js-exchange.vercel.app/',
		},
		description:
			'Este proyecto muestra tablero de manejo de información clasificada y expresada para su facil entendimiento e interpretación.',
	},
	{
		projectId: 2,
		title: 'App exchange detalles',
		projectInfo: {
			category: 'web',
			url: 'https://admin-dashboard-brown-gamma.vercel.app/',
		},
		description:
			'Este proyecto muestra informacion actualizada de el valor de tipo de cambio de diferentente monedas sus tabla de cambios y mejores paginas de cambio.',
	},
	{
		projectId: 3,
		title: 'App Petgram detalles',
		projectInfo: {
			category: 'web',
			url: 'https://vue-js-exchange.vercel.app/',
		},
		description: 'Este proyecto es un clon de instagram orientado a mascotas ',
	},
];
