import { PREGUNTAS_MATEMATICAS } from './banks/matematicas.js'
import { PREGUNTAS_LECTURA_CRITICA } from './banks/lectura-critica.js'

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

export const QB = {
  mat: {
    ...MATERIA_MAT,
    questions: PREGUNTAS_MATEMATICAS
  },
  lc: {
    ...MATERIA_LC,
    questions: PREGUNTAS_LECTURA_CRITICA
  }
}
