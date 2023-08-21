import ProductSelectionPage from '../pages/payment/ProductSelectionPage'
import { connect } from 'react-redux'
const mapStateToProps = state => ({
    favoriteData: state.cardItems.favoriteData
})


export default connect(mapStateToProps)(ProductSelectionPage)