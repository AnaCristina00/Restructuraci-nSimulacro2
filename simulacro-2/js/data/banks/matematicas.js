export const PREGUNTAS_MATEMATICAS = [
  {
    "id": 1,
    "context": "En una bolsa hay 3 bolas rojas, 3 negras y 12 blancas. Una persona afirma que al sacar una bola al azar, los tres colores tienen la misma probabilidad de salir.",
    "text": "Esta afirmación es",
    "opts": [
      "A. verdadera, pues el número de bolas de cada color no importa.",
      "B. falsa, pues no se sabe el número total de bolas en la bolsa.",
      "C. falsa, pues hay más bolas de un color que de los otros dos.",
      "D. verdadera, pues las bolas están repartidas de igual manera."
    ],
    "correct": 2,
    "hint": "Observa cuántas bolas hay de cada color en la bolsa.",
    "comp": "Argumentación · Valida procedimientos y estrategias matemáticas.",
    "nivel": 2,
    "explain": "En la bolsa hay en total 18 bolas y, por tanto, la probabilidad de seleccionar al azar una roja es de 3/18; una negra, de 3/18; una blanca, de 12/18. Luego, como 12 > 3, entonces el color blanco tiene una mayor probabilidad de ser elegido al azar. Por lo tanto, la afirmación de que los tres colores tienen la misma probabilidad es falsa."
  },
  {
    "id": 2,
    "context": "Con respecto a la vertical, la torre se ha inclinado 4° como se muestra en la gráfica.",
    "text": "¿Cuánto mide el otro ángulo?",
    "opts": [
      "A. 4°",
      "B. 14°",
      "C. 86°",
      "D. 90°"
    ],
    "correct": 2,
    "hint": "La suma de los dos ángulos debe ser igual a 90°.",
    "comp": "Interpretación · Comprende y transforma información cuantitativa.",
    "nivel": 2,
    "explain": "La suma de los dos ángulos debe ser igual a 90°. Como el ángulo de inclinación de la torre es de 4°, entonces el otro ángulo mide 90° – 4° = 86°."
  },
  {
    "id": 3,
    "context": "En la tabla se relaciona la cantidad de personas que ingresó cada día durante una semana, según el tipo de entrada que pagó. Sin reserva: 17 euros. Con reserva: 22,5 euros. (Lunes a Domingo: Sin reserva: 300, 300, 500, 700, 300, 300, 700. Con reserva: 700, 800, 200, 600, 500, 500, 600)",
    "text": "Aproximadamente, ¿qué porcentaje del total de personas que visitaron la torre esa semana entraron sin hacer reserva?",
    "opts": [
      "A. 56 %",
      "B. 50 %",
      "C. 44 %",
      "D. 40 %"
    ],
    "correct": 2,
    "hint": "Suma las personas sin reserva y divídelas entre el total.",
    "comp": "Interpretación · Da cuenta de características de información en tablas.",
    "nivel": 3,
    "explain": "El total de personas que entraron sin reserva fue de: 300 + 300 + 500 + 700 + 300 + 300 + 700 = 3.100, y el total de personas que entran con reserva fue de: 700 + 800 + 200 + 600 + 500 + 500 + 600 = 3.900, para un total de 3.100 + 3.900 = 7.000 visitantes. Por tanto, el porcentaje del total de personas que visitaron la torre esa semana sin hacer reserva fue de (3.100/7.000) × 100 ≈ 44%."
  },
  {
    "id": 4,
    "context": "El proceso que muestra cómo se obtiene el dinero recaudado en la semana es: 1. Sumar personas sin reserva, 2. Multiplicar por 17, 3. Sumar personas con reserva, 4. Multiplicar por 22,5.",
    "text": "¿Cuál de las siguientes preguntas NO se puede resolver empleando una parte del proceso anterior?",
    "opts": [
      "A. ¿Con cuál tipo de entrada se recaudó más dinero?",
      "B. ¿Cuántas personas ingresaron en la semana?",
      "C. ¿Cuál es la ganancia total del sitio turístico?",
      "D. ¿Cuánto dinero se recaudó por tipo de entrada?"
    ],
    "correct": 2,
    "hint": "Piensa qué información adicional necesitarías.",
    "comp": "Interpretación · Da cuenta de características de información en tablas.",
    "nivel": 2,
    "explain": "Con el proceso solo se puede calcular y comparar el dinero recaudado en la semana por concepto de entradas (con o sin reserva). Sin embargo, otros valores del sitio turístico, como los gastos, son desconocidos, por lo que no es posible calcular la ganancia total del sitio."
  },
  {
    "id": 5,
    "context": "Con los mismos datos de la tabla anterior (personas sin reserva y con reserva por día, precios de 17€ y 22,5€).",
    "text": "El recaudo total de la semana, registrada en la tabla, fue aproximadamente de",
    "opts": [
      "A. 14 mil euros",
      "B. 140 mil euros",
      "C. 120 euros",
      "D. 120.000 euros"
    ],
    "correct": 1,
    "hint": "Multiplica personas por precio y suma ambos totales.",
    "comp": "Formulación y ejecución · Resuelve problemas con información cuantitativa.",
    "nivel": 2,
    "explain": "Como cada entrada sin reserva vale 17 euros, entonces el total recaudado por personas que ingresaron sin reserva fue de 3.100 × 17 euros = 52.700 euros, y el total recaudado por personas que ingresaron con reserva fue de 3.900 × 22,5 euros = 87.750 euros, y por tanto, el recaudo total de la semana fue de aproximadamente 140 mil euros."
  },
  {
    "id": 6,
    "context": "La mediana de la cantidad de turistas sin reserva que ingresan a la torre es 300; la de los que ingresan con reserva es 600.",
    "text": "Solamente teniendo esto en cuenta, ¿es correcto afirmar que entran el doble de turistas con reserva que sin ella?",
    "opts": [
      "A. No, la mediana es una medida de localización central.",
      "B. No, la mediana muestra la dispersión de los datos.",
      "C. Sí, la mediana me da el promedio de los datos.",
      "D. Sí, la mediana me da la mitad de los datos."
    ],
    "correct": 0,
    "hint": "Recuerda qué representa la mediana.",
    "comp": "Argumentación · Plantea afirmaciones basadas en información estadística.",
    "nivel": 3,
    "explain": "La mediana es el valor que está en la posición central cuando los datos están ordenados y, por tanto, no caracteriza necesariamente los totales ni permite hacer comparaciones de ese tipo. La mediana indica el valor central, no el total ni el promedio."
  },
  {
    "id": 7,
    "context": "El dueño de un parque recreativo planea construir tres piscinas y decorar sus bordes con baldosas blancas y azules, tal como se muestra en las figuras. Figura 1: 12 baldosas azules. Figura 2: 18 baldosas azules. Figura 3: 24 baldosas azules.",
    "text": "Según la observación de las figuras 1, 2 y 3, puede afirmarse correctamente que el número de baldosas",
    "opts": [
      "A. azules se incrementa en seis de una piscina a la del siguiente tamaño.",
      "B. blancas aumenta en ocho a medida que crece el tamaño de las piscinas.",
      "C. azules es el doble de la cantidad de baldosas blancas en cada piscina.",
      "D. blancas es la tercera parte de la cantidad de las baldosas azules."
    ],
    "correct": 0,
    "hint": "Observa el patrón: 12, 18, 24...",
    "comp": "Interpretación · Identifica patrones en secuencias.",
    "nivel": 2,
    "explain": "A partir de las figuras mostradas, se observa que: Figura 1: 12 baldosas azules. Figura 2: 18 = 12 + 6. Figura 3: 24 = 18 + 6. Se puede concluir que el número de baldosas azules aumenta en 6 de una piscina a la del siguiente tamaño."
  },
  {
    "id": 8,
    "context": "Se lanzan cuatro fichas que tienen dos caras cada una. Una de las fichas es azul por sus dos caras, otra es blanca por sus dos caras y las otras fichas tienen una cara azul y una cara blanca.",
    "text": "¿Cuál de los siguientes eventos es imposible que ocurra?",
    "opts": [
      "A. Obtener una cara azul y tres caras blancas.",
      "B. Obtener dos caras azules y dos caras blancas.",
      "C. Obtener tres caras azules y una cara blanca.",
      "D. Obtener cuatro caras azules y cero blancas."
    ],
    "correct": 3,
    "hint": "Hay al menos una ficha con cara blanca.",
    "comp": "Formulación y ejecución · Determina eventos en experimentos aleatorios.",
    "nivel": 3,
    "explain": "Dado que hay una ficha con sus dos caras blancas, y son cuatro fichas en total, en cualquier lanzamiento de las cuatro fichas siempre se obtendrá al menos una cara blanca. Por tanto, es imposible obtener cuatro caras azules y cero blancas."
  },
  {
    "id": 9,
    "context": "El costo de la boleta en un cinema depende de la edad de la persona: De 0 a 8 años: $5.000. De 8 a 16 años: $7.000. De 16 a 56 años: $10.000. Más de 56 años: $6.000.",
    "text": "La gráfica que representa esta función es",
    "opts": [
      "A. Gráfica escalonada correcta con los cuatro intervalos.",
      "B. Gráfica con puntos unidos por segmentos.",
      "C. Gráfica con línea continua.",
      "D. Gráfica con valores en eje equivocado."
    ],
    "correct": 0,
    "hint": "La función es a trozos y tiene saltos.",
    "comp": "Interpretación · Transforma representación de información.",
    "nivel": 2,
    "explain": "Con la información de la tabla se puede construir la gráfica de la función a trozos correctamente con los intervalos de edad en el eje X y los costos en el eje Y, mostrando los saltos correspondientes a cada intervalo."
  },
  {
    "id": 10,
    "context": "En la figura se muestra la construcción de una cometa triangular, en la que se conoce únicamente la medida del ángulo M = 150°. El ángulo O debe ser menor que 150° para que la cometa vuele. El análisis indica: I. M = 150°, N = 180° - 150°. II. N = 30°. III. La suma de los ángulos de un triángulo debe ser 160°. IV. Si N = 30°, O + P = 160° - 30°. V. O + P = 130°. VI. O debe ser menor que 130°. VII. Si O < 130° entonces O < 150°. VIII. La cometa volará.",
    "text": "Del anterior análisis, el paso en el que se comete un error es el",
    "opts": [
      "A. I, porque si M = 150°, N debe ser la resta entre 160° y 150°, es decir, N = 10°.",
      "B. III, porque la suma de los ángulos internos de un triángulo debe ser 180°.",
      "C. VII, porque O < 130° no quiere decir O < 150°.",
      "D. VIII, porque si O < 150° la cometa no volará."
    ],
    "correct": 1,
    "hint": "¿Cuánto suman los ángulos internos de un triángulo?",
    "comp": "Argumentación · Valida procedimientos con criterios establecidos.",
    "nivel": 3,
    "explain": "La suma de los ángulos internos de un triángulo debe ser igual a 180°. Por tanto: O + P = 180° – 30° = 150°, de donde O < 150°. La conclusión sigue siendo verdadera, pero en la argumentación había una premisa falsa en el paso III."
  },
  {
    "id": 11,
    "context": "Se realizó una encuesta a 200 clientes de una empresa de telecomunicaciones. Las calificaciones fueron: Excelente 10%, Bueno 35%, Regular 40%, Malo 15%.",
    "text": "La afirmación verdadera acerca de los resultados de la encuesta es:",
    "opts": [
      "A. Más de 30 clientes consideran que la calidad del servicio que ofrece la empresa es excelente.",
      "B. Menos de 50 clientes consideran que la calidad del servicio que ofrece la empresa es regular.",
      "C. Menos de 55 clientes están satisfechos con el servicio que ofrece la empresa.",
      "D. Más de 60 clientes consideran que la calidad del servicio que ofrece la empresa es bueno."
    ],
    "correct": 3,
    "hint": "Calcula el 35% de 200 clientes.",
    "comp": "Argumentación · Plantea afirmaciones basadas en información.",
    "nivel": 3,
    "explain": "Dado que la encuesta se realizó a 200 clientes, y el 35% de los encuestados calificó como 'bueno' el servicio, entonces (35/100) × 200 clientes = 70 clientes calificaron como 'bueno' el servicio. Por tanto, es verdadero que más de 60 clientes consideran que la calidad del servicio que ofrece la empresa es buena."
  },
  {
    "id": 12,
    "context": "'Quisiéramos dividir el segmento MN en dos partes congruentes'. Para su construcción, un estudiante efectuó: Se construyen dos triángulos equiláteros MNP y MNQ. Luego se traza el segmento PQ, intersecando a MN en R.",
    "text": "De acuerdo con la información anterior, la construcción geométrica que debió hacer el estudiante para realizar la actividad fue",
    "opts": [
      "A. Dos triángulos con MN como lado.",
      "B. Triángulos congruentes sin intersección en R.",
      "C. M y N como centros de circunferencias.",
      "D. Dos triángulos equiláteros sobre MN con PQ intersectando MN en R."
    ],
    "correct": 3,
    "hint": "Los triángulos deben construirse sobre MN.",
    "comp": "Formulación y ejecución · Resuelve problemas en contextos geométricos.",
    "nivel": 3,
    "explain": "Siguiendo los pasos de la construcción, se deben construir dos triángulos equiláteros MNP y MNQ sobre el segmento MN. Luego se traza el segmento PQ, intersecando a MN en R. Esta es la construcción geométrica correcta."
  },
  {
    "id": 13,
    "context": "La familia Ramírez tiene un plan local de 220 minutos. En enero consumió 331 minutos. Se registró un consumo adicional de 111 minutos.",
    "text": "El tiempo adicional consumido por la familia Ramírez en enero fue:",
    "opts": [
      "A. 1 hora y 11 minutos.",
      "B. 1 hora y 51 minutos.",
      "C. 3 horas y 40 minutos.",
      "D. 5 horas y 31 minutos."
    ],
    "correct": 1,
    "hint": "111 minutos = 1 hora + ? minutos",
    "comp": "Formulación y ejecución · Resuelve problemas con información cuantitativa.",
    "nivel": 2,
    "explain": "Dado que el plan local actual de la familia Ramírez es de 220 minutos, y en el mes de enero el consumo fue de 331 minutos, entonces se registró un consumo adicional de 111 minutos, que son equivalentes a 1 hora y 51 minutos."
  },
  {
    "id": 14,
    "context": "El señor Ramírez considera que el valor del minuto adicional fue excesivo. Su hija asegura que la diferencia entre el valor del minuto del plan y el del minuto adicional es de $35,42.",
    "text": "¿Cuál de los siguientes datos NO se necesita para hall ar esta diferencia?",
    "opts": [
      "A. La cantidad de minutos del plan.",
      "B. El valor del consumo adicional.",
      "C. El total de cargos del mes.",
      "D. El valor del plan local."
    ],
    "correct": 2,
    "hint": "Solo necesitas datos directos del plan y consumo.",
    "comp": "Formulación y ejecución · Diseña planes para решения problemas.",
    "nivel": 3,
    "explain": "Para determinar el valor por minuto del plan local se debe dividir el costo del plan local entre la cantidad de minutos del plan local; para determinar el valor por minuto adicional se debe dividir el costo del consumo adicional entre la cantidad de minutos adicionales consumidos. Por tanto, el total de cargos del mes no es necesario para hall ar esta diferencia."
  },
  {
    "id": 15,
    "context": "En un hospital, los niveles de clasificación son: Nivel I: atención inmediata. Nivel II: 5 min a 2 horas. Nivel III: 4 a 6 horas. Isabel llegó y recibió el turno 180. Fue clasificada en Nivel III y al cabo del máximo tiempo (6 horas) es llamada cuando el tablero muestra el número 240.",
    "text": "¿Aproximadamente cuántas personas por hora llegaron a la sala de espera mientras Isabel estuvo allí?",
    "opts": [
      "A. 60 personas por hora.",
      "B. 40 personas por hora.",
      "C. 15 personas por hora.",
      "D. 10 personas por hora."
    ],
    "correct": 3,
    "hint": "Divide personas adicionales entre horas.",
    "comp": "Formulación y ejecución · Ejecuta planes de solución.",
    "nivel": 3,
    "explain": "Como Isabel fue clasificada en el Nivel III, recibió el turno 180 cuando llegó, y fue atendida en el tiempo máximo de espera que es de 6 horas, entonces cuando observa el número 240, han llegado 240 – 180 = 60 personas adicionales. Por tanto, han llegado 60 personas / 6 horas = 10 personas por hora."
  },
  {
    "id": 16,
    "context": "Cada uno de los lados del cuadrilátero de la figura se traslada una unidad hacia la izquierda; luego se amplía esta al doble de su tamaño, manteniéndose fijo el vértice inferior. Dos de los vértices del cuadrilátero ampliado son (-5,7) y (-1,1).",
    "text": "¿Cuáles son las coordenadas de los otros dos vértices?",
    "opts": [
      "A. (-1,5) y (3,7).",
      "B. (5,-1) y (7,3).",
      "C. (5,7) y (1,1).",
      "D. (1,5) y (-5,-7)."
    ],
    "correct": 0,
    "hint": "Sigue la transformación paso a paso.",
    "comp": "Formulación y ejecución · Identifica características de localización en sistemas cartesianos.",
    "nivel": 3,
    "explain": "Si el cuadrilátero se traduce una unidad hacia la izquierda y luego se amplía al doble de su tamaño, manteniendo fijo el vértice inferior, los otros dos vértices tienen coordenadas (-1,5) y (3,7)."
  },
  {
    "id": 17,
    "context": "Un empresario compra un apartamento de $80.000.000 y acuerda pagarlo en cuotas mensuales de igual valor. Opciones: 50 cuotas de $1.600.000, 40 de $2.000.000, 32 de $2.500.000, 25 de $3.200.000, 20 de $4.000.000, 16 de $5.000.000, 10 de $8.000.000, 8 de $10.000.000.",
    "text": "Respecto a la información de la tabla, es verdadero afirmar que",
    "opts": [
      "A. el empresario paga más por el apartamento dependiendo de la cantidad de cuotas.",
      "B. de manera proporcional, a mayor cantidad de cuotas menor valor se pagará en cada una de ellas.",
      "C. el empresario paga solo el valor del apartamento únicamente cuando elige el menor número de cuotas.",
      "D. de manera proporcional, a mayor valor pagado por cuota, más tiempo se tardará en pagar la deuda."
    ],
    "correct": 1,
    "hint": "Multiplica número de cuotas por valor de cuota.",
    "comp": "Interpretación · Da cuenta de características de información en tablas.",
    "nivel": 2,
    "explain": "De la tabla se puede observar que: 50 × 1.600.000 = 80.000.000, 40 × 2.000.000 = 80.000.000, y así sucesivamente. El número de cuotas y el valor de la cuota son inversamente proporcionales, y entre mayor sea el número de cuotas, menor valor se pagará en cada una de ellas."
  },
  {
    "id": 18,
    "context": "Para ambientar musicalmente una reunión, se cuenta con tres CD, cada uno de ellos tiene canciones de salsa (S) y merengue (M).",
    "text": "¿Cuál de los siguientes diagramas representa la situación de seleccionar al azar una canción del CD1, luego una del CD2 y finalmente una del CD3?",
    "opts": [
      "A. Diagrama con todas las combinaciones posibles.",
      "B. Diagrama con solo algunas combinaciones.",
      "C. Diagrama con selección aleatoria de CD.",
      "D. Diagrama con un solo tipo de canción."
    ],
    "correct": 0,
    "hint": "Cada CD tiene canciones de ambos géneros.",
    "comp": "Interpretación · Representa experimentos aleatorios.",
    "nivel": 3,
    "explain": "Como el CD1 tiene canciones de salsa y de merengue, el resultado de seleccionar al azar una canción de este CD se puede representar con dos ramas. Análogamente para CD2 y CD3. El diagrama correcto muestra todas las combinaciones posibles de los tres CD."
  },
  {
    "id": 19,
    "context": "Para observar los efectos de un medicamento, este se inyecta en un animal y se registra el comportamiento de la temperatura (°C) en función del tiempo (horas). La gráfica muestra una curva con amplitud 2, trasladada 36 unidades hacia arriba, con periodo 3.",
    "text": "¿Cuál de las siguientes expresiones corresponde a la curva que describe la temperatura del animal en función del tiempo?",
    "opts": [
      "A. F(t) = 2cos(2πt/3) + 36",
      "B. F(t) = 3cos(2πt/3) + 38",
      "C. F(t) = 2sen(2πt/3) + 36",
      "D. F(t) = 3sen(2πt/3) + 38"
    ],
    "correct": 2,
    "hint": "La amplitud es 2 y está trasladada 36 unidades.",
    "comp": "Formulación y ejecución · Modela situaciones con funciones trigonométricas.",
    "nivel": 3,
    "explain": "A partir de la información de la gráfica se puede determinar que la amplitud de la curva es 2, la curva está trasladada 36 unidades hacia arriba respecto al eje horizontal, y tiene periodo 3. Por tanto, la expresión que corresponde a la curva es F(t) = 2sen(2πt/3) + 36."
  },
  {
    "id": 20,
    "context": "La velocidad máxima de un auto es 100 km/h. Pilar afirma que, a su velocidad máxima, en 100 horas el auto avanzará 1 km.",
    "text": "La afirmación de Pilar es",
    "opts": [
      "A. falsa, porque a la velocidad máxima en una hora recorrerá 100 km.",
      "B. verdadera, porque al dividir la velocidad máxima entre 100 horas se obtiene 1 km.",
      "C. falsa, porque en 100 horas el auto recorrerá 100 km.",
      "D. verdadera, porque al dividir 100 entre 1 se obtiene el valor 100."
    ],
    "correct": 0,
    "hint": "100 km/h significa 100 km en 1 hora.",
    "comp": "Argumentación · Analiza validez de afirmaciones sobre razones de cambio.",
    "nivel": 2,
    "explain": "Si la velocidad máxima del auto es de 100 km/h, entonces cada hora el auto recorre 100 km manteniendo dicha velocidad. Por tanto, en 100 horas el auto recorrerá 100 horas × 100 km/hora = 10.000 km. La afirmación de que recorrerá 1 km es falsa."
  }
];
