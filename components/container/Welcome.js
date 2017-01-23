import { connect } from 'react-redux'
import WelcomeVisual from '../visual/Welcome'

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: () => {
            dispatch({type: "CHANGE_TEXT"});
        }
    }
}

const Welcome = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeVisual)

export default Welcome