import { format, parse, startOfWeek, getDay } from 'date-fns'
import { dateFnsLocalizer } from 'react-big-calendar'
import esES from 'date-fns/locale/es'

const locales = {
  es: esES
}

export const localizer = dateFnsLocalizer({
  startOfWeek,
  getDay,
  format,
  parse,
  locales
})
