export type FilterType = 'ALL' | 'COMPLETED' | 'INCOMPLETE'
export type LabelType = 'プライベート' | '仕事' | 'その他'
export type TodoType = {
  id: number | null
  label: LabelType
  text: string
  isCompleted: boolean
}
