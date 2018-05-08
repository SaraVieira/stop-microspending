import StoreStatus from './status'

export const InitialState = {
  periods: [
    { value: 12, label: 'Yearly' },
    { value: 1, label: 'Monthly' },
    { value: 0.5, label: 'Twice a Month' },
    { value: 0.25, label: 'Weekly' },
    { value: 0.033, label: 'Daily' }
  ],
  payments: [],
  status: StoreStatus.init
}
