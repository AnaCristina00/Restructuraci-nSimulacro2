export const NIVEL_INFO = {
  "mat": {
    "1": {
      "range": "Puntaje 0 – 35",
      "summary": "Puede leer información puntual relacionada con situaciones cotidianas presentada en tablas o gráficas.",
      "items": []
    },
    "2": {
      "range": "Puntaje 36 – 50",
      "summary": "Hace comparaciones y establece relaciones entre los datos presentados.",
      "items": [
        "Compara datos de dos variables",
        "Identifica valores en diferentes tipos de registro",
        "Reconoce promedio simple, moda, mayor, menor"
      ]
    },
    "3": {
      "range": "Puntaje 51 – 70",
      "summary": "Selecciona información, señala errores y hace distintos tipos de transformaciones aritméticas.",
      "items": [
        "Selecciona gráficas correspondientes",
        "Compara información gráfica",
        "Reconoce desarrollos planos",
        "Justifica afirmaciones usando operaciones aritméticas"
      ]
    },
    "4": {
      "range": "Puntaje 71 – 100",
      "summary": "Resuelve problemas y justifica la veracidad o falsedad de afirmaciones.",
      "items": [
        "Resuelve problemas con información de eventos dependientes",
        "Realiza transformaciones con operaciones complejas",
        "Modela usando lenguaje algebraico",
        "Resuelve problemas de conteo"
      ]
    },
    "name": "Matemáticas"
  },
  "lc": {
    "1": {
      "range": "Puntaje 0 – 35",
      "summary": "Identifica información explícita en textos de estructura simple.",
      "items": []
    },
    "2": {
      "range": "Puntaje 36 – 50",
      "summary": "Relaciona partes de un texto para construir significado y reconoce intenciones del autor.",
      "items": [
        "Relaciona información explícita",
        "Identifica propósito del texto",
        "Reconoce intenciones del autor"
      ]
    },
    "3": {
      "range": "Puntaje 51 – 65",
      "summary": "Evalúa argumentos, identifica supuestos e implícitos en textos complejos.",
      "items": [
        "Evalúa argumentos y contraargumentos",
        "Identifica supuestos no explícitos",
        "Reconoce estrategias discursivas",
        "Diferencia hechos de opiniones"
      ]
    },
    "4": {
      "range": "Puntaje 66 – 100",
      "summary": "Analiza críticamente textos con múltiples perspectivas y evalúa la validez de las conclusiones.",
      "items": [
        "Evalúa la validez de conclusiones",
        "Analiza múltiples perspectivas",
        "Identifica sesgos y falacias",
        "Sintetiza información de varias fuentes"
      ]
    },
    "name": "Lectura Crítica"
  }
}

export const NIVEL_THRESHOLDS = {
  "mat": {
    "2": 36,
    "3": 51,
    "4": 71
  },
  "lc": {
    "2": 36,
    "3": 51,
    "4": 66
  }
}

export function getNivel(pct, subject) {
  const thresholds = NIVEL_THRESHOLDS[subject] || { 4: 75, 3: 50, 2: 25 }
  if (pct >= thresholds[4]) return 4
  if (pct >= thresholds[3]) return 3
  if (pct >= thresholds[2]) return 2
  return 1
}
