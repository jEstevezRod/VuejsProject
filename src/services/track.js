import vueMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
    return vueMusicService.get('', {
        params: {
            method: 'track.search',
            track: q,
            api_key: '135145ec7d6594c19879e579b1e5105c',
            format: 'json'
        }
    }).then(res => {
        return res.data
    })
}

export default trackService