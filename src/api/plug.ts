import { 
  BLOCK_TYPE_TEXT, 
  BLOCK_TYPE_RICH_TEXT, 
  BLOCK_TYPE_MEDIA, 
} from "@/src/components/articleBlock/types"

import {
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_BIG,
} from "@/src/components/articleBlock/types"

import {
  BLOCK_TYPE_DIVIDER,
  DIVIDER_EMPTY,
  DIVIDER_LINE,
} from "@/src/components/articleBlock/types"


const plugAbout = {

}

const plugData = [{
  page: {
    next: {
      slug: 'asamclo',
      title: 'Интернет-магазин: Asamclo',
      image: {
        bgColor: '#F1DADA',
        src: '/projects/asamclo/project-asamclo-1.png',
      }
    },
  },
  project: {
    slug: 'auditonline',
    title: 'IT экосистема: АудитОнлайн',
    snippet: 'Аудиторская компания, топ 100 по России',
    description: 'Компания занимается аудиторской деятельностью с 2016 года, оказывает услуги в области бухгалтерского и налогового учета.',
    image: {
      bgColor: '#D4EAD2',
      src: '/projects/ao/project-ao-1.png',
    }
  },
  blocks: [{
    type: BLOCK_TYPE_RICH_TEXT,
    data: {
      text: `
- Поддерживал и дорабатывал личный кабинет \`React\`/\`Django\`, разделенный по функционалу для клиентов, менеджеров, аудиторов, партнеров и самой аудиторской компании:
	- Автогенерация документов. Интеграции с электронным документооборотом.
	- Внутренние чаты между пользователя, интеграция с ChatGPT.
	- Внутренняя аналитика и отчеты.
	- \`Javascript\` виджет: скрипт, показывающий форму расчета стоимости услуги на сторонних сайтах партнера.
- Внедрил \`Django юнит тесты\`.
- Работал над интеграцией с 1С: сделал API документацию и эндпоинты для взаимодействия с сторонним 1С расширением.
- Разработал небольшой внутренний сервис рассылки Email сообщений клиентам.

\`NextJS\` \`React\` \`Redux\` \`Webpack\` \`Electron\` \`Scss\`

\`Django\` \`Restless\` \`Postgres\` \`Celery\` \`Channels\`

\`Ubuntu\` \`Nginx\`
`   },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/ao/АО-клиент-заказы.png', thumbnail: '/projects/ao/АО-клиент-заказы-small.png' },
      ],
      description: 'Страница с заказами от лица клиента:\nЕсть возможность перейти в нужный заказ или создать новый',
      project: {
        id: 1,
        name: 'Кабинет АудитОнлайн',
        url: 'https://cabinet.auditonline.club',
      },
    },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/ao/АО-клиент-страница-заказа-1.png', thumbnail: '/projects/ao/АО-клиент-страница-заказа-1-small.png' },
        { type: 'image', src: '/projects/ao/АО-клиент-страница-заказа-2.png', thumbnail: '/projects/ao/АО-клиент-страница-заказа-2-small.png' },
      ],
      description: 'Страница заказа от лица клиента: Eсть чат с компанией, информация по заказу, возможность посмотреть/скачать документы и ответить на запросы',
      project: {
        id: 1,
        name: 'Кабинет АудитОнлайн',
        url: 'https://cabinet.auditonline.club',
      },
    },
  }, {
    type: BLOCK_TYPE_DIVIDER,
    data: {
      size: SIZE_MEDIUM,
      type: DIVIDER_LINE,
    }
  }, {
    type: BLOCK_TYPE_RICH_TEXT,
    data: {
      text: `
Разрабатывал и поддерживал десктопное Electron приложение для внутренней работы Аудиторов:
	- Разработал \`NodeJS\` модуль работы с файловой системой Windows, подружил с командной строкой Windows Server.
`   },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/ao/Настольное ПО для Аудиторов-1.png', thumbnail: '/projects/ao/Настольное ПО для Аудиторов-1-small.png' },
      ],
      description: 'Настольная программа для аудиторов, сделанная на Electron\'e для работы аудиторов на удаленной Windows машине. Через нее можно работать с заказом и файлами клиента',
    },
  }, {
    type: BLOCK_TYPE_DIVIDER,
    data: {
      size: SIZE_MEDIUM,
      type: DIVIDER_LINE,
    }
  }, {
    type: BLOCK_TYPE_RICH_TEXT,
    data: {
      text: `
Создал Telegram чат бот - консультант, который собирает контактные данные, фидбек на ответы и имеет расширяемые лимиты на количество задаваемых вопросов. 
`   },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'video', src: '/projects/ao/ao-tg-preview-1.mov', thumbnail: '/projects/ao/АО-ТГ-БОТ-1-small.png' },
        { type: 'image', src: '/projects/ao/АО-ТГ-БОТ-1.png', thumbnail: '/projects/ao/АО-ТГ-БОТ-1-small.png' },
      ],
      description: 'Телеграм чат бот - консультант: Пользователь может задать вопрос и получить на него ответ от ИИ. Бот собирает контактные данные и имеет расширяемые лимиты',
      project: {
        id: 1,
        name: 'ТГ Бот АудитОнлайн',
        url: 'https://t.me/ao_consult_bot',
      },
    },
  }, {
    type: BLOCK_TYPE_DIVIDER,
    data: {
      size: SIZE_MEDIUM,
      type: DIVIDER_LINE,
    }
  }, {
    type: BLOCK_TYPE_RICH_TEXT,
    data: {
      text: `
Разработал несколько вариантов главного (продающего) сайта аудиторской компании. До ~2020 года сайт был сделан на \`PHP\`, затем был переписан на \`NextJS\` + \`Django\`.
`
    },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/ao/АО-лендинг-1.png', thumbnail: '/projects/ao/АО-лендинг-1-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-2.png', thumbnail: '/projects/ao/АО-лендинг-2-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-3.png', thumbnail: '/projects/ao/АО-лендинг-3-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-4.png', thumbnail: '/projects/ao/АО-лендинг-4-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-5.png', thumbnail: '/projects/ao/АО-лендинг-5-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-6.png', thumbnail: '/projects/ao/АО-лендинг-6-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-7.png', thumbnail: '/projects/ao/АО-лендинг-7-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-8.png', thumbnail: '/projects/ao/АО-лендинг-8-small.png' },
        { type: 'image', src: '/projects/ao/АО-лендинг-9.png', thumbnail: '/projects/ao/АО-лендинг-9-small.png' },
      ],
      description: 'Одна из версий лендинга АудитОнлайн: Калькулятор расчета стоимости, преимущества, клиенты и команда',
    },
  }]
}, {
  page: {
    next: {
      slug: 'phones',
      title: 'Сайт: кто звонил',
      image: {
        bgColor: '#CED9E6',
        src: '/projects/phones/project-phones-1.png',
      }
    },
  },
  project: {
    slug: 'asamclo',
    title: 'Интернет-магазин: Asamclo',
    snippet: 'Мультибрендовый ритейлер одежды',
    description: 'Интернет-магазин женской, мужской и детской одежды',
    image: {
      bgColor: '#F1DADA',
      src: '/projects/asamclo/project-asamclo-1.png',
    }
  },
  blocks: [{
    type: BLOCK_TYPE_RICH_TEXT,
    data: {
      text: `
- Интегрирован с API \`Wildberries\`'а, \`Ozon\`'а и \`Яндекс.Маркет\`'а:
  - Передача информации о товарных позициях, ценах и остатках
  - Резервирование товарных позиций и синхронизация с CRM системой товароучета.
- Интегрирован с сервисом управления торговлей и складским учетом \`МойСклад\`.
- Интегрирован с онлайн кассой.

\`Javascript\` \`Webpack\` \`Scss\`

\`Django\` \`Postgres\` \`Celery\`

\`Ubuntu\` \`Nginx\`
`   },
  }, {
    type: BLOCK_TYPE_DIVIDER,
    data: {
      size: SIZE_SMALL,
      type: DIVIDER_EMPTY,
    }
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/asamclo/asamclo-index-1.png', thumbnail: '/projects/asamclo/asamclo-index-1-small.png' },
        { type: 'image', src: '/projects/asamclo/asamclo-index-2.png', thumbnail: '/projects/asamclo/asamclo-index-2-small.png' },
        { type: 'image', src: '/projects/asamclo/asamclo-index-3.png', thumbnail: '/projects/asamclo/asamclo-index-3-small.png' },
      ],
      description: 'Главная страница: каталог, блоки с помощью',
      project: {
        id: 1,
        name: 'Интернет магазин ASAMCLO',
        url: 'https://asamclo.ru',
      },
    },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/asamclo/asamclo-item-1.png', thumbnail: '/projects/asamclo/asamclo-item-1-small.png' },
        { type: 'image', src: '/projects/asamclo/asamclo-item-2.png', thumbnail: '/projects/asamclo/asamclo-item-2-small.png' },
      ],
      description: 'Cтраница товара: Изображения, характеристики, описание, отзывы',
    },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/asamclo/asamclo-checkout-1.png', thumbnail: '/projects/asamclo/asamclo-checkout-1-small.png' },
        { type: 'image', src: '/projects/asamclo/asamclo-checkout-2.png', thumbnail: '/projects/asamclo/asamclo-checkout-2-small.png' },
        { type: 'image', src: '/projects/asamclo/asamclo-checkout-3.png', thumbnail: '/projects/asamclo/asamclo-checkout-3-small.png' },
      ],
      description: 'Cтраница корзины: Список товаров, оформление заказа',
    },
  }]
}, {
  page: {
    next: {
      slug: 'auditonline',
      title: 'IT экосистема: АудитОнлайн',
      image: {
        bgColor: '#D4EAD2',
        src: '/projects/ao/project-ao-1.png',
      }
    },
  },
  project: {
    slug: 'phones',
    title: 'Сайт: кто звонил',
    snippet: 'Отзывы к телефонным номерам',
    description: 'Сайт с отзывами на телефонные номера.',
    image: {
      bgColor: '#CED9E6',
      src: '/projects/phones/project-phones-1.png',
    }
  },
  blocks: [{
    type: BLOCK_TYPE_RICH_TEXT,
    data: {
      text: `
- База из 700+ тыс. телефоных номеров, 50+ тыс. оценок и комментариев.
- Был куплен в 2022 году и переписан с \`wordpress'а\` на \`Django Templates\`.

\`Javascript\` \`Webpack\` \`Scss\`

\`Django\` \`Postgres\` \`Celery\`

\`Ubuntu\` \`Nginx\`
`   },
  }, {
    type: BLOCK_TYPE_DIVIDER,
    data: {
      size: SIZE_SMALL,
      type: DIVIDER_EMPTY,
    }
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/phones/phones-1.png', thumbnail: '/projects/phones/phones-1-small.png' },
        { type: 'image', src: '/projects/phones/phones-2.png', thumbnail: '/projects/phones/phones-2-small.png' },
      ],
      description: 'Страница телефонного номера с отзывами',
    },
  }, {
    type: BLOCK_TYPE_MEDIA,
    data: {
      media: [
        { type: 'image', src: '/projects/phones/phones-web-dev-3.png', thumbnail: '/projects/phones/phones-web-dev-3-small.png' },
        { type: 'image', src: '/projects/phones/phones-web-dev-2.png', thumbnail: '/projects/phones/phones-web-dev-2-small.png' },
        { type: 'image', src: '/projects/phones/phones-web-dev-1.png', thumbnail: '/projects/phones/phones-web-dev-1-small.png' },
      ],
      description: 'Производительность сайта по версии PageSpeed Insights',
    },
  }]
}]
export {
  plugAbout,
  plugData,
}