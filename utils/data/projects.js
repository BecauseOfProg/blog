const projects = [
  {
    name: 'yt-podcast',
    icon: 'mdi-rss-box',
    color: 'orange',
    language: 'Python',
    links: [
      { name: 'website', value: 'https://podcast.becauseofprog.fr' },
      { name: 'source', value: 'https://github.com/BecauseOfProg/yt-podcast' }
    ]
  },
  {
    name: 'api',
    icon: 'mdi-book-multiple-outline',
    color: 'light',
    language: 'Markdown',
    links: [
      { name: 'documentation', value: 'https://github.com/BecauseOfProg/api-docs' },
      { name: 'source', value: 'https://github.com/BecauseOfProg/api' }
    ]
  },
  {
    name: 'discord-bot',
    icon: 'mdi-discord',
    color: 'teal',
    language: 'Golang',
    links: [
      { name: 'discord', value: 'https://discord.becauseofprog.fr' },
      { name: 'source', value: 'https://github.com/BecauseOfProg/XBOP' }
    ]
  },
  {
    name: 'openweathermap-ruby',
    icon: 'mdi-weather-partly-lightning',
    color: 'red',
    language: 'Ruby',
    links: [
      { name: 'source', value: 'https://github.com/BecauseOfProg/openweathermap-ruby' }
    ]
  }
]

const languages = {
  Markdown: {
    icon: 'mdi-language-markdown',
    color: 'grey'
  },
  Python: {
    icon: 'mdi-language-python',
    color: 'blue'
  },
  Ruby: {
    icon: 'mdi-language-ruby',
    color: 'red'
  },
  Golang: {
    icon: 'mdi-language-go',
    color: 'cyan darken-1'
  }
}

export { projects, languages }
