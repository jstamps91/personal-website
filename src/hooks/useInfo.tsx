import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getMyGithubInfo } from '../utils/requests/githubInfo'
import { mergeAdvanced as merge } from 'object-merge-advanced'
import { get } from 'lodash'

export const useInfo = () => {
  const [info, setInfo] = useLocalStorage('info', {
    githubStatus: {
      status: 'I would be most content if my children grew up thinking decorating consists mostly of building enough bookshelves.',
      bio: 'Full Stack Software Engineer',
      company: 'jstamps dev solutions',
      contributions: 253,
    },
    latestCommit: {
      message: 'Adds MailChimp integration for subscription data',
      createdAt: '2021-09-29T16:38:10Z',
      url: 'https://github.com/jstamps91/jstamps.dev-api',
    },
    listening: {
      name: "The Chain",
      artist: 'Fleetwood Mac',
      album: 'Rumours',
      url: 'https://www.last.fm/music/Fletwood+Mac/_/The+Chain',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/b8365c64bec38d1f0d05d9c1367a8cb3.jpg',
      playing: false,
      scrobbles: '105',
      lastPlayingDate: '2021-09-26T02:20:44.000Z',
    },
    reading: {
      title: "I'm 12% done with The Missing README: A Guide for the New Software Engineers",
      updatedAt: '2021-09-15T04:53:13.000Z',
      url: 'https://www.goodreads.com/review/list/140230151?shelf=currently-reading',
      // profileUrl: 'https://www.goodreads.com/user/show/140230151-joshua-stamps',
    },
  })

  useEffect(() => {
    const setGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo()
        setInfo(prevInfo =>
          merge(prevInfo, newInfo, {
            mergeBoolsUsingOrNotAnd: get(newInfo, 'listening.playing', false),
          })
        )
      } catch (err) { }
    }
    setGithubInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return info
}
