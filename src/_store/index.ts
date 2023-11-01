import { reactive } from 'vue'

// HOME
export interface HomeStoreProps {
  imageHomeIsHovered: boolean
  footHomeIsHovered: boolean
  homeIsReady: boolean
  setImageHomeIsHovered: (isHovered: boolean) => void
  setFootHomeIsHovered: (isHovered: boolean) => void
  setHomeIsReady: (payload: boolean) => void
}
const homeStore: HomeStoreProps = {
  imageHomeIsHovered: false,
  footHomeIsHovered: false,
  homeIsReady: false,
  setImageHomeIsHovered(isHovered: boolean = false) {
    this.imageHomeIsHovered = isHovered
  },
  setFootHomeIsHovered(isHovered: boolean = false) {
    this.footHomeIsHovered = isHovered
  },
  setHomeIsReady(payload: boolean = false) {
    this.homeIsReady = payload
  },
}

// PAGES
export interface PageStoreProps {
  currentPage?: string
  activeBack: boolean
  setCurrentPage: (payload?: string | undefined) => void
  setActiveBack: (payload: boolean) => void
}
const pageStore: PageStoreProps = {
  currentPage: '',
  setCurrentPage(payload) {
    this.currentPage = payload
  },
  activeBack: false,
  setActiveBack(payload: boolean = false) {
    this.activeBack = payload
  },
}

// ABOUT
export interface AboutStoreProps {
  aboutIsReady: boolean
  setAboutIsReady: (payload: boolean) => void
}
const aboutStore: AboutStoreProps = {
  aboutIsReady: false,
  setAboutIsReady(payload: boolean = false) {
    this.aboutIsReady = payload
  },
}

// PRODUCT
export interface ProductStoreProps {
  productIsReady: boolean
  setProductIsReady: (payload: boolean) => void
  productPlayIsHovered: boolean
  setProductPlayIsHovered: (isHovered: boolean) => void
  currentProductCard?: string
  setCurrentProductCard: (card?: string) => void
}
const productStore: ProductStoreProps = {
  productIsReady: false,
  productPlayIsHovered: false,
  currentProductCard: undefined,
  setProductIsReady(payload: boolean = false) {
    this.productIsReady = payload
  },
  setProductPlayIsHovered(isHovered: boolean = false) {
    this.productPlayIsHovered = isHovered
  },
  setCurrentProductCard(card: string | undefined = undefined) {
    this.currentProductCard = card
  },
}

// CONTACT
export interface ContactStoreProps {
  contactIsReady: boolean
  setContactIsReady: (payload: boolean) => void
}
const contactStore: ContactStoreProps = {
  contactIsReady: false,
  setContactIsReady(payload: boolean = false) {
    this.contactIsReady = payload
  },
}

// STORE
export interface StoreProps
  extends HomeStoreProps,
    PageStoreProps,
    AboutStoreProps,
    ProductStoreProps,
    ContactStoreProps {}
const store: StoreProps = reactive({
  ...homeStore,
  ...pageStore,
  ...aboutStore,
  ...productStore,
  ...contactStore,
})

export default store
