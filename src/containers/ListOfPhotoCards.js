import { withPhotos } from '../hocs/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
