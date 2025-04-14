import Link from 'next/link'

import {ProjectCards} from '@/src/containers/project'
import Button from '@/src/components/button';
import Profile from '@/src/components/profile';
import { PageTitle } from '@/src/components/page';
import WorkStatus from '@/src/components/workStatus';
import {TelegramIcon} from '@/src/components/icons';

import { cvRedirect, telegramRedirect } from '@/src/utils'

import { plugAbout } from '@/src/api/plug'


export default function Page() {
  return (
    <div className="index-page">
      <WorkStatus align={'left'} />

      <Profile />

      <div className="index-page__buttons">
        <div style={{ textWrap: 'nowrap' }}>
          <Button type='btn' title={(
            <>
              <div className="btn__icon">
                <TelegramIcon fill={'#fff'} />
              </div>
              Написать в telegram
            </>
          )} onClick={telegramRedirect}/>
        </div>

        <Button type='link' title={(
            <>
              <div className="btn__icon">
                <img src={'/icon-pdf-red.png'} className="btn-pdf-icon" />
              </div>
              <span className="font-16 no-link-color">
                Резюме.pdf
              </span>
            </>
          )} onClick={cvRedirect} />

        {/*
        <div className="quote">
          Буду рад обсудить ваш проект <br/>или присоединиться к вашей команде
        </div>
        */}
      </div>

      <PageTitle title={(<>
        Я занимаюсь web дизайном и разработкой, преимущественно на <span className="code-highlight">React</span>/<span className="code-highlight">Django</span> стеке 👨‍💻
      </>)} />

      <ProjectCards />
    </div>
  )
}