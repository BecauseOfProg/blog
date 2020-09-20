const socials = [
  { id: 'website', name: 'Site web', icon: 'mdi-web', color: 'darker', link: '' },
  { id: 'twitter', name: 'Twitter', icon: 'mdi-twitter', color: 'light-blue', link: 'https://twitter.com/' },
  { id: 'discord', name: 'Discord', icon: 'mdi-discord', color: '#7289DA', link: '' },
  { id: 'mastodon', name: 'Mastodon', icon: 'mdi-mastodon', color: 'blue', link: '' },
  { id: 'github', name: 'GitHub', icon: 'mdi-github', color: '#24292e', link: 'https://github.com/' },
  { id: 'instagram', name: 'Instagram', icon: 'mdi-instagram', color: '#E1306C', link: 'https://instagram.com/' },
  { id: 'reddit', name: 'Reddit', icon: 'mdi-reddit', color: 'deep-orange ', link: 'https://reddit.com/u/' }
]

const bopSocials = [
  { ...getSocial('twitter'), value: 'BecauseOfProg' },
  { ...getSocial('discord'), value: 'https://discord.becauseofprog.fr' },
  { ...getSocial('mastodon'), value: 'https://mstdn.io/@bop' },
  { ...getSocial('github'), value: 'BecauseOfProg' },
  { ...getSocial('instagram'), value: 'BecauseOfProg' }
]

function getSocial(id) {
  return socials.find(social => social.id === id)
}

export { socials, bopSocials, getSocial }
