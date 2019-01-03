import ajax from './ajax'

export const reqMsiteData = () => ajax('/home')

export const reqCateList = () => ajax('/classify')

export const reqTabs = () => ajax()
