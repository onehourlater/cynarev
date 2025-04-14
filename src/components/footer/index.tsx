
import {TelegramIcon} from '@/src/components/icons';

import { telegramRedirect } from '@/src/utils'


const Footer = (props: any) => {
  return (
    <div className="footer">
      <div className="footer__c">
        <div className="footer__c__social-icons">
          <div className="social-icon" onClick={telegramRedirect}>
            <TelegramIcon fill={'#2E7AF6'} width={25} height={25} />
          </div>
        </div>
        <div className="footer_credits credit-c">
          Иконки: <a href="https://icons8.ru/" rel="nofollow" target="_blank" className="credit-c__link">icons8</a>
        </div>
      </div>
    </div>
  )
}
export default Footer