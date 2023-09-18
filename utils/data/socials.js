import { mdiWeb, mdiTwitter, mdiMastodon, mdiGithub, mdiInstagram, mdiReddit } from '@mdi/js'
import { mdiDiscord } from '../icons'

const socials = [
  { id: 'website', name: 'Site web', icon: mdiWeb, color: 'darker', link: '' },
  { id: 'twitter', name: 'Twitter', icon: mdiTwitter, color: 'light-blue', link: 'https://twitter.com/' },
  { id: 'discord', name: 'Discord', icon: mdiDiscord, color: '#7289DA', link: '' },
  { id: 'mastodon', name: 'Mastodon', icon: mdiMastodon, color: 'blue', link: '' },
  { id: 'github', name: 'GitHub', icon: mdiGithub, color: '#24292e', link: 'https://github.com/' },
  { id: 'instagram', name: 'Instagram', icon: mdiInstagram, color: '#E1306C', link: 'https://instagram.com/' },
  { id: 'reddit', name: 'Reddit', icon: mdiReddit, color: 'deep-orange ', link: 'https://reddit.com/u/' }
]

const bopSocials = [
  { ...getSocial('twitter'), value: 'BecauseOfProg' },
  { ...getSocial('discord'), value: 'https://discord.becauseofprog.fr' },
  { ...getSocial('mastodon'), value: 'https://mamot.fr/@becauseofprog' },
  { ...getSocial('github'), value: 'BecauseOfProg' },
  { ...getSocial('instagram'), value: 'BecauseOfProg' }
]

function getSocial (id) {
  return socials.find(social => social.id === id)
}

export { socials, bopSocials, getSocial }
