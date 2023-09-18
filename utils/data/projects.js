import { mdiRssBox, mdiBookMultipleOutline, mdiWeatherPartlyLightning, mdiLanguageMarkdown, mdiLanguagePython, mdiLanguageRuby, mdiLanguageGo } from '@mdi/js'
import { mdiDiscord } from '~/utils/icons'

const projects = [
  {
    name: 'yt-podcast',
    icon: mdiRssBox,
    color: 'orange',
    language: 'Python',
    links: [
      { name: 'website', value: 'https://podcast.becauseofprog.fr' },
      { name: 'source', value: 'https://github.com/BecauseOfProg/yt-podcast' }
    ]
  },
  {
    name: 'api',
    icon: mdiBookMultipleOutline,
    color: 'light',
    language: 'Markdown',
    links: [
      { name: 'documentation', value: 'https://github.com/BecauseOfProg/api-docs' },
      { name: 'source', value: 'https://github.com/BecauseOfProg/api' }
    ]
  },
  {
    name: 'discord-bot',
    icon: mdiDiscord,
    color: 'teal',
    language: 'Golang',
    links: [
      { name: 'discord', value: 'https://discord.becauseofprog.fr' },
      { name: 'source', value: 'https://github.com/BecauseOfProg/XBOP' }
    ]
  },
  {
    name: 'openweathermap-ruby',
    icon: mdiWeatherPartlyLightning,
    color: 'red',
    language: 'Ruby',
    links: [
      { name: 'source', value: 'https://github.com/BecauseOfProg/openweathermap-ruby' }
    ]
  }
]

const languages = {
  Markdown: {
    icon: mdiLanguageMarkdown,
    color: 'grey'
  },
  Python: {
    icon: mdiLanguagePython,
    color: 'blue'
  },
  Ruby: {
    icon: mdiLanguageRuby,
    color: 'red'
  },
  Golang: {
    icon: mdiLanguageGo,
    color: 'cyan darken-1'
  }
}

export { projects, languages }
