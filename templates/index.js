import TemplateName from './TemplateName'
import './TemplateName.scss'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({}) => ({
	//prop: store.action
}))(observer(withTranslation()(TemplateName)))
