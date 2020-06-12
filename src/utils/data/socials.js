const socials = [
  { id: 'website', name: 'Site web', icon: 'mdi-web', color: 'darker', },
  { id: 'twitter', name: 'Twitter', icon: 'mdi-twitter', color: 'light-blue' },
  { id: 'discord', name: 'Discord', icon: 'mdi-discord', color: 'teal' },
  { id: 'mastodon', name: 'Mastodon', icon: 'mdi-mastodon', color: 'blue' },
  { id: 'github', name: 'GitHub', icon: 'mdi-github', color: 'darker' },
  { id: 'instagram', name: 'Instagram', icon: 'mdi-instagram', color: 'pink' }
]

const bopSocials = [
  { ...getSocial('twitter'), value: 'https://twitter.com/BecauseOfProg' },
  { ...getSocial('discord'), value: 'https://discord.becauseofprog.fr' },
  { ...getSocial('mastodon'), value: 'https://mstdn.io/@bop' },
  { ...getSocial('github'), value: 'https://github.com/BecauseOfProg' },
  { ...getSocial('instagram'), value: 'https://instagram.com/BecauseOfProg' }
]

function getSocial(id) {
  return socials.find(social => social.id === id)
}

export { socials, bopSocials, getSocial }
