export interface IProduct {
  name: string
  returnValue: number
  returnRisk: number
  assets: string
  changeDescription: string
  lock: boolean
  tokenSymbol: string
  ledgerStatus: string
  currency: string
  kycOnly: boolean
  canBuy: boolean
  canSell: boolean
  hasVbAsset: boolean
}

export interface IShowcase {
  products: IProduct[]
  message: string
}