type Filters = 'Agências' | 'Chatbot' | 'Marketing Digital' | 'Geração de Leads' | 'Mídia Paga' | '';

type PropsFilterButton = {
  text: Filters,
  key: Filters,
}

export type { Filters, PropsFilterButton }