import { PREGUNTAS_MATEMATICAS } from './banks/matematicas.js'
import { PREGUNTAS_LECTURA_CRITICA } from './banks/lectura-critica.js'
import { PREGUNTAS_INGLES } from './banks/ingles.js'
import { PREGUNTAS_CIENCIAS_NATURALES } from './banks/ciencias-naturales.js'

const MATERIA_MAT = {
  "name": "Matemáticas",
  "icon": "📐",
  "tag": "tag-mat",
  "color": "#1a3a5c",
  "desc": "Evalúa competencias de interpretación, formulación y argumentación en contextos matemáticos reales.",
  "competencias": [
    "Interpretación y representación",
    "Formulación y ejecución",
    "Argumentación"
  ]
}

const MATERIA_LC = {
  "name": "Lectura Crítica",
  "icon": "📖",
  "tag": "tag-lc",
  "color": "#1a3a5c",
  "desc": "Evalúa la capacidad de comprender, interpretar y evaluar textos de diversa índoles, identificando supuestos, implicaciones y argumentos.",
  "competencias": [
    "Interpretación textual",
    "Evaluación crítica",
    "Argumentación"
  ]
}

const MATERIA_ING = {
  "name": "Inglés",
  "icon": "🌎",
  "tag": "tag-ing",
  "color": "#1a3a5c",
  "desc": "Evalúa competencias de comprensión de textos en inglés, vocabulario y expresión oral y escrita.",
  "competencias": [
    "Vocabulario",
    "Comprensión de lectura",
    "Expresión"
  ]
}

const MATERIA_CN = {
  "name": "Ciencias Naturales",
  "icon": "🔬",
  "tag": "tag-cn",
  "color": "#1a3a5c",
  "desc": "Evalúa competencias de comprensión de fenómenos biológicos, químicos y físicos, así como la capacidad de análisis científico.",
  "competencias": [
    "Biología",
    "Química",
    "Física"
  ]
}

export const QB = {
  mat: {
    ...MATERIA_MAT,
    questions: PREGUNTAS_MATEMATICAS
  },
  lc: {
    ...MATERIA_LC,
    questions: PREGUNTAS_LECTURA_CRITICA
  },
  ing: {
    ...MATERIA_ING,
    questions: PREGUNTAS_INGLES
  },
  cn: {
    ...MATERIA_CN,
    questions: PREGUNTAS_CIENCIAS_NATURALES
  }
}
