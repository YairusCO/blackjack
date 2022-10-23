import { ReactComponent as S2 } from '../../../assets/S2.svg'
import { ReactComponent as S3 } from '../../../assets/S3.svg'
// import { ReactComponent as Ps4 } from '../../../assets/P4.svg'
import { ReactComponent as S5 } from '../../../assets/S5.svg'
import { ReactComponent as S6 } from '../../../assets/S6.svg'
import { ReactComponent as S7 } from '../../../assets/S7.svg'
import { ReactComponent as S8 } from '../../../assets/S8.svg'
import { ReactComponent as S9 } from '../../../assets/S9.svg'
import { ReactComponent as S10 } from '../../../assets/S10.svg'
import { ReactComponent as JS } from '../../../assets/JS.svg'
import { ReactComponent as QS } from '../../../assets/QS.svg'
import { ReactComponent as KS } from '../../../assets/KS.svg'
import { ReactComponent as AceS } from '../../../assets/AceS.svg'
import { ReactComponent as Joker14 } from '../../../assets/Joker14.svg'
import S4 from '../../../assets/S4.png'

export const getCards = (idx) =>
  [
    <AceS />,
    <S2 />,
    <S3 />,
    <img className="png" src={S4} alt="S4" />,
    <S5 />,
    <S6 />,
    <S7 />,
    <S8 />,
    <S9 />,
    <S10 />,
    <JS />,
    <QS />,
    <KS />,
    <Joker14 />,
  ][idx]
