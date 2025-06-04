
import { images } from '../assets/imagenes';

export const recetas = [
  {
    id: 1,
    nombre: 'Waffles con dulce de leche',
    imagen: images.WaffleDulce,
    ingredientes: ['1 huevo', '1/2 taza de azucar', '1/2 taza de leche', '1/2 tacita de aceite', '1 taza de harina', 'Escencia de vainilla','Dulce de leche a eleccion'],
    listaIngredientes: [ { id: 2, nombre: 'Leche de almendras', precio: 3000, cantidad:0, imagen: images.Leche, descripcion: 'Leche de almendras sabor original 1 Litro' },
    , { id: 6, nombre: 'Premezcla', precio: 6000, cantidad:0, imagen: images.Premezcla, descripcion: 'Premezcla Santa Maria libre de gluten 100g' }, { id: 4, nombre: 'Dulce de Leche', precio: 4000, cantidad:0, imagen: images.Dulce, descripcion: 'Dulce de leche La Serenisima 400g' }
   ],
    pasos: [
      'Colocar en un bowl el huevo, el azúcar y la esencia, luego mezclar bien.',
      'Colocar la leche y el aceite y mezclar hasta que se una bien.',
      'Colocar la harina y la pizca de sal y mezclar de a poco hasta integrar bien. La masa queda como para buñuelitos(ni líquida ni muy pesada).',
      'Luego calentar una sartén y yo le puse aceite en aerosol para que no se pegue. Con un cucharón poner un poco de masa en forma redonda y controlar cuando tome color doradito darlo vuelta y cocinar del otro lado, cocinarlo en fuego medio-bajo para que no se queme la masa',
      'Servir con dulce de leche.'
    ]
  },
  {
    id: 2,
    nombre: 'Pizza sin tacc',
    imagen: images.Pizza,
    ingredientes: ['200g Premezcla', '1 cucharada de polvo para hornear', '150ml de leche', 'Salsa de tomate', '200 gr de queso cremoso','150 gr panceta ahumada', 'Cebolla y morron a gusto'],
        listaIngredientes: [ { id: 2, nombre: 'Leche de almendras', precio: 3000, cantidad:0, imagen: images.Leche, descripcion: 'Leche de almendras sabor original 1 Litro' },
    , { id: 6, nombre: 'Premezcla', precio: 6000, cantidad:0, imagen: images.Premezcla, descripcion: 'Premezcla Santa Maria libre de gluten 100g' }
   ],
    pasos: [
      'En un cuenco poner la Premezcla sal le agregamos leche tibia, a la vez mezclamos vamos viendo si le falta más leche o premezcla, ya cuando la mezcla esté lista, le agregamos el polvo de hornear mezclamos nuevamente con el batidor.',
      'Aceitar una pizzera volcar la masa mandar al horno por 10 o 15 minutos',
      'Con la salsa ya hecha una vez que esté cocida, la masa sacar del horno y cubrir con la salsa, dejar 1 o2 cucharadas de salsa para el final.',
      'Ya la cubrimos con salsa, seguimos con la panceta tapamos con el queso y sobre la cubierta de queso la salpicamos con la salsa que habíamos reservado y también salpicamos con condimento.',
      'Volvemos al horno hasta que se gratine todo, y a disfrutar esta pizza Celiaca'
    ]
  },
  {
    id: 3,
    nombre: 'Pan sin gluten',
    imagen: images.Pan,
    ingredientes: ['300 g de mezcla de harinas sin gluten ', '10 g de levadura seca.', '1 cucharadita de azúcar.', '1 cucharadita de sal.', '250 ml de agua tibia.','2 cucharadas de aceite de oliva.', '1 cucharada de vinagre de manzana.'],
    listaIngredientes: [ { id: 6, nombre: 'Premezcla', precio: 6000, cantidad:0, imagen: images.Premezcla, descripcion: 'Premezcla Santa Maria libre de gluten 100g' }
   ],
    pasos: [
      'En un bol grande, mezclar la harina sin gluten y la sal.',
      'En otro recipiente, disolver la levadura seca y el azúcar en el agua tibia. Dejar reposar durante unos 5 minutos hasta que la levadura empiece a espumar.',
      'Añadir la mezcla de levadura al bol de los ingredientes secos. Agregar también el aceite de oliva y el vinagre de manzana.',
      'Mezclar todo bien hasta obtener una masa homogénea. No es necesario amasar mucho.',
      'Cubrir la masa con un paño húmedo y dejarla reposar en un lugar cálido durante unos 40 minutos o hasta que haya duplicado su tamaño.',
      'Precalentar el horno a 200 °C.',
      'Colocar la masa en un molde ligeramente aceitado o formar pequeños panes sobre una bandeja de horno.',
      'Hornear durante unos 25 minutos o hasta que el pan esté dorado y al golpear la base suene hueco.',
      'Dejar enfriar sobre una rejilla antes de cortar.'
    ]
  },
  {
    id: 4,
    nombre: 'Galletas',
    imagen: images.Galletas,
    ingredientes: ['2 tazas azúcar rubia', '1 cucharada miel', '100 gr manteca pomada', 'Ralladura de 2 limones', '1 cucharadita esencia de vainilla','2 huevos', '3 tazas avena certificada sin gluten','1 taza harina de trigo sarraceno'],
    listaIngredientes: [ { id: 6, nombre: 'Premezcla', precio: 6000, cantidad:0, imagen: images.Premezcla, descripcion: 'Premezcla Santa Maria libre de gluten 100g' }
],
    pasos: [
      'Batir la manteca pomada con el azúcar y la miel hasta obtener una crema blanda.',
      'Agregar la ralladura de los limones y la vainilla, batir hasta integrar.',
      'Agregar 2 huevos batir hasta integrar.',
      'Agregar la avena certificada sin gluten y la harina de trigo sarraceno íntegra con cuchara con movimientos envolventes.',
      'Reposar en la heladera por 30 min. Encender el horno y precalentar a 180°C.',
      'Con una cuchara poner en una placa limpia montoncitos de mezcla separadas entre sí por 2 cm.',
      'Poner al horno precalentado a 180°C para cocinar hasta que estén doradas.',
      'Desmoldar tibias con una espátula y poner a enfriar en un plato.'
    ]
  }
];