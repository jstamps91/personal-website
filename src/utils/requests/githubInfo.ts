export const getMyGithubInfo = async () => {
  try {
    const res = await fetch('https://hopeful-joliot-fde3d6.netlify.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        query: `
        {
          githubStatus {
            status
            updatedAt
            bio
            company
            contributions
          }
          latestCommit {
            message
            createdAt
            url
          }
          listening {
            name
            artist
            album
            url
            image
            playing
            scrobbles
            lastPlayingDate
          }
          reading {
            title
            updatedAt
            url          
          }
        }`,
      }),
    })

    const json = await res.json()
    return json.data
  } catch (err) {
    console.log('Error: ', err)
  }
}
